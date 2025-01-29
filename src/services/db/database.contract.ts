export type QueryOperator = "=" | "!=" | ">" | "<" | ">=" | "<=";

export interface QueryFilter {
  field: string;
  operator: QueryOperator;
  value: string | number | boolean | Date;
}

export interface QueryOptions {
  filters?: QueryFilter[];
}

export interface TableService<T extends object> {
  readonly tableId: string;

  insert(row: T): Promise<string>;
  read(id: string): Promise<T & { id: string; createdAt: Date }>;
  update(id: string, row: Partial<T>): Promise<void>;
  query(options: QueryOptions): Promise<Array<T & { id: string; createdAt: Date }>>;
  delete(id: string): Promise<void>;
}
