"use server";

import { randomUUID } from 'crypto';

import { sheets, TOKEN_EXPIRATION_DAYS } from './config';
import { LeadData, LeadErrors } from './types';
import { environment } from '@/lib/environment';

async function getSheetId(spreadsheetId: string, sheetName: string): Promise<number> {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });

  const sheet = spreadsheet.data.sheets?.find(sheet => sheet.properties?.title === sheetName);
  if (!sheet || sheet.properties?.sheetId === null || sheet.properties?.sheetId === undefined) throw new Error('Sheet not found');

  return sheet.properties.sheetId;
}

class Sheet {
  constructor(
    private spreadsheetId: string,
    private sheetName: string,
    private sheetId?: number
  ) {
    this.initSheetId();
  }

  private async initSheetId() {
    if (!this.sheetId) {
      this.sheetId = await getSheetId(this.spreadsheetId, this.sheetName);
    }
  }

  async getValues(range?: string): Promise<any[][]> {
    try {
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: range ? `${this.sheetName}!${range}` : this.sheetName,
      });
      return response.data.values || [];
    } catch (error) {
      throw new Error(`Failed to get range: ${(error as Error).message}`);
    }
  }

  async appendRow(rowData: any[]) {
    return this.appendRows([rowData]);
  }

  async appendRows(rowsData: any[][]) {
    try {
      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: this.sheetName,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values: rowsData,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to append rows: ${(error as Error).message}`);
    }
  }

  async deleteRow(rowIndex: number) {
    try {
      const response = await sheets.spreadsheets.batchUpdate({
        spreadsheetId: this.spreadsheetId,
        requestBody: {
          requests: [{
            deleteDimension: {
              range: {
                sheetId: this.sheetId,
                dimension: 'ROWS',
                startIndex: rowIndex,
                endIndex: rowIndex + 1
              }
            }
          }]
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to delete row: ${(error as Error).message}`);
    }
  }

  async clear(range: string) {
    try {
      const response = await sheets.spreadsheets.values.clear({
        spreadsheetId: this.spreadsheetId,
        range: `${this.sheetName}!${range}`,
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to clear range: ${(error as Error).message}`);
    }
  }
}

const unverifiedLeads = new Sheet(environment.google.leadsSpreadsheetId!, "unverified-leads");
const verifiedLeads = new Sheet(environment.google.leadsSpreadsheetId!, "verified-leads");
const contacts = new Sheet(environment.google.contactsSpreadsheetId!, "submissions");

const COLUMNS = {
  UNVERIFIED: {
    NAME: 0,
    SURNAME: 1,
    EMAIL: 2,
    PHONE: 3,
    INTEREST_IN_BETA: 4,
    REFERRAL_SOURCE: 5,
    LOCALE: 6,
    TOKEN: 7,
    CREATED_AT: 8
  },
  VERIFIED: {
    NAME: 0,
    SURNAME: 1,
    EMAIL: 2,
    PHONE: 3,
    INTEREST_IN_BETA: 4,
    REFERRAL_SOURCE: 5,
    LOCALE: 6,
    CREATED_AT: 7
  }
};

async function isEmailVerified(email: string): Promise<boolean> {
  try {
    const values = await verifiedLeads.getValues();
    return values.flat().includes(email);
  } catch (error) {
    console.error(error);
    throw new Error('INTERNAL_ERROR');
  }
}

export async function storeUnverifiedLead(leadData: LeadData) {
  try {
    // Check if the email is already verified
    if (await isEmailVerified(leadData.email)) {
      throw new Error('ALREADY_VERIFIED');
    }

    // Generate a token and store the unverified lead
    const token = randomUUID();
    const createdAt = new Date();

    await unverifiedLeads.appendRow([
      leadData.name,
      leadData.surname,
      leadData.email,
      leadData.phone || '',
      leadData.interestInBeta || false,
      leadData.referralSource || '',
      leadData.locale,
      token,
      createdAt
    ]);

    return token;
  } catch (error) {
    if (error instanceof Error && LeadErrors.includes(error.message as typeof LeadErrors[number])) throw new Error(error.message);
    console.error('Failed to store unverified lead:', error);
    throw new Error('INTERNAL_ERROR');
  }
}

export async function verifyLead(token: string) {
  try {
    const unverifiedRows = await unverifiedLeads.getValues();

    // Check if the token is valid
    const leadIndex = unverifiedRows.findIndex(row => row[COLUMNS.UNVERIFIED.TOKEN] === token);
    if (leadIndex === -1) throw new Error('TOKEN_INVALID');

    // Check if the lead isn't already verified
    const lead = unverifiedRows[leadIndex];
    if (await isEmailVerified(lead[COLUMNS.UNVERIFIED.EMAIL])) return;

    // Check if the token is not expired
    const createdAt = new Date(lead[COLUMNS.UNVERIFIED.CREATED_AT]);
    const expirationDate = new Date(createdAt.getTime() + (TOKEN_EXPIRATION_DAYS * 24 * 60 * 60 * 1000));

    if (Date.now() > expirationDate.getTime()) {
      await unverifiedLeads.deleteRow(leadIndex);
      throw new Error('TOKEN_EXPIRED');
    }

    // Append the unverified lead to the verified leads
    await verifiedLeads.appendRow([
      lead[COLUMNS.UNVERIFIED.NAME],
      lead[COLUMNS.UNVERIFIED.SURNAME],
      lead[COLUMNS.UNVERIFIED.EMAIL],
      lead[COLUMNS.UNVERIFIED.PHONE],
      lead[COLUMNS.UNVERIFIED.INTEREST_IN_BETA],
      lead[COLUMNS.UNVERIFIED.REFERRAL_SOURCE],
      lead[COLUMNS.UNVERIFIED.LOCALE],
      new Date()
    ]);

    return;
  } catch (error) {
    if (error instanceof Error && LeadErrors.includes(error.message as typeof LeadErrors[number])) throw new Error(error.message);
    console.error('Failed to store unverified lead:', error);
    throw new Error('INTERNAL_ERROR');
  }
}

export async function storeContactSubmission(
  name: string,
  email: string,
  message: string
) {
  try {
    const submittedAt = new Date();
    await contacts.appendRow([name, email, message, submittedAt]);
  } catch (error) {
    console.error('Failed to store contact submission:', error);
    throw new Error('Failed to store contact submission');
  }
}