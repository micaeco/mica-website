import { sheets_v4 } from "googleapis";

export async function getSheetId(sheets: sheets_v4.Sheets, spreadsheetId: string, sheetName: string): Promise<number> {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId
  });

  const sheet = spreadsheet.data.sheets?.find(sheet => sheet.properties?.title === sheetName);
  if (!sheet || sheet.properties?.sheetId === null || sheet.properties?.sheetId === undefined) throw new Error('Sheet not found');

  return sheet.properties.sheetId;
}

export function encodeMIMEWords(text: string): string {
  const encoded = Buffer.from(text, 'utf-8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
  return `=?UTF-8?B?${encoded}?=`;
}

export function columnToLetter(column: number): string {
  let letter = '';
  while (column > 0) {
    const temp = (column - 1) % 26;
    letter = String.fromCharCode(temp + 65) + letter;
    column = (column - temp - 1) / 26;
  }
  return letter;
}