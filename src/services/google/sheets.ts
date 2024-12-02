"use server";

import { randomUUID } from 'crypto';

import { config } from './config';
import { sheets } from './clients';
import { LeadData, LeadErrors } from './types';
import { getSheetId, columnToLetter } from './utils';

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
      this.sheetId = await getSheetId(sheets, this.spreadsheetId, this.sheetName);
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

  async updateRow(rowIndex: number, rowData: any[]) {
    try {
      const range = `${this.sheetName}!A${rowIndex + 1}`;

      const response = await sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [rowData],
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update row: ${(error as Error).message}`);
    }
  }

  async updateRowColumn(rowIndex: number, columnIndex: number, value: any) {
    try {
      const columnLetter = columnToLetter(columnIndex + 1);
      const range = `${this.sheetName}!${columnLetter}${rowIndex + 1}`;

      const response = await sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: range,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[value]],
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to update row column: ${(error as Error).message}`);
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

const tokens = new Sheet(config.leadsSpreadsheetId!, "tokens");
const leads = new Sheet(config.leadsSpreadsheetId!, "leads");
const contacts = new Sheet(config.contactsSpreadsheetId!, "submissions");

const COLUMNS = {
  TOKENS: {
    EMAIL: 0,
    TOKEN: 1,
    CREATED_AT: 2
  },
  LEADS: {
    NAME: 0,
    SURNAME: 1,
    EMAIL: 2,
    PHONE: 3,
    INTEREST_IN_BETA: 4,
    REFERRAL_SOURCE: 5,
    LOCALE: 6,
    IS_VERIFIED: 7,
    CREATED_AT: 8
  }
};

async function isEmailRegistered(email: string): Promise<boolean> {
  try {
    const values = await leads.getValues();
    return values.flat().includes(email);
  } catch (error) {
    console.error(error);
    throw new Error('INTERNAL_ERROR');
  }
}

async function isEmailVerified(email: string): Promise<boolean> {
  try {
    const values = await leads.getValues();
    return values.flat().includes(email) && values.some(row => row[COLUMNS.LEADS.EMAIL] === email && row[COLUMNS.LEADS.IS_VERIFIED].toLowerCase() === 'true');
  } catch (error) {
    console.error(error);
    throw new Error('INTERNAL_ERROR');
  }
}

export async function storeUnverifiedLead({ name, surname, email, phone, interestInBeta, referralSource, locale }: LeadData) {
  try {
    // Check if the email is already verified
    if (await isEmailVerified(email)) {
      throw new Error('ALREADY_VERIFIED');
    }

    // Generate a token and store the unverified lead
    const token = randomUUID();
    const createdAt = new Date();

    await tokens.appendRow([
      email,
      token,
      createdAt
    ]);

    if (await isEmailRegistered(email)) {
      const leadRows = await leads.getValues();
      const leadIndex = leadRows.findIndex(row => row[COLUMNS.LEADS.EMAIL] === email);
      await leads.updateRow(leadIndex, [name, surname, email, phone, interestInBeta, referralSource, locale, false, createdAt])
    } else {
      await leads.appendRow([
        name,
        surname,
        email,
        phone,
        interestInBeta,
        referralSource,
        locale,
        false,
        createdAt
      ]);
    }

    return token;
  } catch (error) {
    console.error('Failed to store unverified lead:', error);
    if (error instanceof Error && LeadErrors.includes(error.message as typeof LeadErrors[number])) {
      throw error;
    }
    throw new Error('INTERNAL_ERROR');
  }
}

export async function verifyLead(token: string): Promise<void> {
  try {
    // Get and validate token
    const tokenRows = await tokens.getValues();
    const tokenIndex = tokenRows.findIndex(row => row[COLUMNS.TOKENS.TOKEN] === token);
    if (tokenIndex === -1) {
      throw new Error('TOKEN_INVALID');
    }

    const tokenInfo = tokenRows[tokenIndex];
    const tokenEmail = tokenInfo[COLUMNS.TOKENS.EMAIL];

    // Skip if already verified
    if (await isEmailVerified(tokenEmail)) {
      return;
    }

    // Check token expiration
    const tokenCreatedAt = new Date(tokenInfo[COLUMNS.TOKENS.CREATED_AT]);
    const expirationDate = new Date(
      tokenCreatedAt.getTime() + (config.tokenExpirationDays * 24 * 60 * 60 * 1000)
    );

    if (Date.now() > expirationDate.getTime()) {
      throw new Error('TOKEN_EXPIRED');
    }

    // Update lead verification status
    const leadRows = await leads.getValues();
    const leadIndex = leadRows.findIndex(row => row[COLUMNS.LEADS.EMAIL] === tokenEmail);

    if (leadIndex === -1) {
      throw new Error('INTERNAL_ERROR');
    }

    await leads.updateRowColumn(leadIndex, COLUMNS.LEADS.IS_VERIFIED, true);
  } catch (error) {
    console.error('Failed to verify lead:', error);
    if (error instanceof Error && LeadErrors.includes(error.message as typeof LeadErrors[number])) {
      throw error;
    }
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