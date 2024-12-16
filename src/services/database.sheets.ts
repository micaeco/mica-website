import { JWT } from "google-auth-library";
import { google, sheets_v4 } from "googleapis";
import { TableService, QueryOptions } from "./database.interface";
import { env } from "@/lib/env";
import { ServerError } from "@/lib/constants";

export class SheetsTableService<T extends object> implements TableService<T> {
  private sheets: sheets_v4.Sheets;
  readonly tableId: string;
  private readonly columns: (keyof T)[];

  constructor(tableId: string, columns: (keyof T)[]) {
    this.tableId = tableId;
    this.columns = columns;
    this.sheets = google.sheets({
      version: "v4",
      auth: new JWT({
        email: env.google.clientEmail,
        key: env.google.privateKey!.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      }),
    });
  }

  async insert(row: T): Promise<string> {
    const id = crypto.randomUUID();
    const createdAt = new Date();

    // Create row values in correct column order
    const rowValues = this.columns.map((col) => row[col]);
    const values = [id, createdAt.toISOString(), ...rowValues];

    await this.sheets.spreadsheets.values.append({
      spreadsheetId: this.tableId,
      range: "A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [values.map((v) => v?.toString() ?? "")],
      },
    });

    return id;
  }

  async read(id: string): Promise<T & { id: string; createdAt: Date }> {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.tableId,
      range: "A:ZZ",
    });

    const rows = response.data.values ?? [];
    const row = rows.find((row) => row[0] === id);

    if (!row) {
      throw new ServerError(`Row with id ${id} not found in table ${this.tableId}`);
    }

    return this.rowToObject(row);
  }

  async update(id: string, row: Partial<T>): Promise<void> {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.tableId,
      range: "A:ZZ",
    });

    const rows = response.data.values ?? [];
    const rowIndex = rows.findIndex((row) => row[0] === id);

    if (rowIndex === -1) {
      throw new ServerError(`Row with id ${id} not found in table ${this.tableId}`);
    }

    const currentRow = rows[rowIndex];
    const updatedRow = [...currentRow];

    // Update only specified fields in the correct positions
    Object.entries(row).forEach(([key, value]) => {
      const colIndex = this.getColumnIndexForField(key as keyof T);
      if (colIndex !== -1) {
        updatedRow[colIndex] = value?.toString() ?? "";
      }
    });

    await this.sheets.spreadsheets.values.update({
      spreadsheetId: this.tableId,
      range: `A${rowIndex + 1}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [updatedRow],
      },
    });
  }

  async query(options: QueryOptions): Promise<Array<T & { id: string; createdAt: Date }>> {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.tableId,
      range: "A:ZZ",
    });

    const rows = response.data.values ?? [];
    let filteredRows = rows;

    if (options.filters) {
      filteredRows = rows.filter((row) => {
        return options.filters!.every((filter) => {
          const colIndex = this.getColumnIndexForField(filter.field as keyof T);
          if (colIndex === -1) return false;

          const cellValue = row[colIndex];
          const filterValue = filter.value.toString();

          switch (filter.operator) {
            case "=":
              return cellValue === filterValue;
            case "!=":
              return cellValue !== filterValue;
            case ">":
              return Number(cellValue) > Number(filterValue);
            case "<":
              return Number(cellValue) < Number(filterValue);
            case ">=":
              return Number(cellValue) >= Number(filterValue);
            case "<=":
              return Number(cellValue) <= Number(filterValue);
            default:
              return false;
          }
        });
      });
    }

    return filteredRows.map((row) => this.rowToObject(row));
  }

  async delete(id: string): Promise<void> {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.tableId,
      range: "A:ZZ",
    });

    const rows = response.data.values ?? [];
    const rowIndex = rows.findIndex((row) => row[0] === id);

    if (rowIndex === -1) {
      throw new ServerError(`Row with id ${id} not found in table ${this.tableId}`);
    }

    await this.sheets.spreadsheets.batchUpdate({
      spreadsheetId: this.tableId,
      requestBody: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: 0,
                dimension: "ROWS",
                startIndex: rowIndex,
                endIndex: rowIndex + 1,
              },
            },
          },
        ],
      },
    });
  }

  private getColumnIndexForField(field: keyof T): number {
    const colIndex = this.columns.indexOf(field);
    return colIndex === -1 ? -1 : colIndex + 2; // +2 for id and createdAt columns
  }

  private rowToObject(row: string[]): T & { id: string; createdAt: Date } {
    const [id, createdAtStr, ...values] = row;

    const obj = {} as T;
    this.columns.forEach((col, index) => {
      obj[col] = this.convertValue(values[index], col) as T[typeof col];
    });

    return {
      id,
      createdAt: new Date(createdAtStr),
      ...obj,
    };
  }

  private convertValue(value: string, field: keyof T): unknown {
    // This assumes your T interface has appropriate types defined
    // You might want to pass a record of field types in the constructor if needed
    const sampleValue = ({} as T)[field];
    const type = typeof sampleValue;

    switch (type) {
      case "number":
        return Number(value);
      case "boolean":
        return value.toLowerCase() === "true";
      case "object":
        try {
          return JSON.parse(value);
        } catch {
          return value;
        }
      default:
        return value;
    }
  }
}
