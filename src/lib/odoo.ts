export class OdooAPI {
  private url: string;
  private db: string;
  private api: string;

  constructor(url: string, db: string, api: string) {
    this.url = url;
    this.db = db;
    this.api = api;
  }

  private async authenticate(): Promise<string> {
    const response = await fetch(`${this.url}/web/session/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        params: {
          db: this.db,
          login: 'apikey',
          api: this.api,
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.data.message);
    }

    return data.result.session_id;
  }

  private async callKw(
    model: string,
    method: string,
    args: any[],
    kwargs: Record<string, any> = {}
  ): Promise<any> {
    const session_id = await this.authenticate();

    const response = await fetch(`${this.url}/web/dataset/call_kw`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session_id=${session_id}`,
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'call',
        params: {
          model: model,
          method: method,
          args: args,
          kwargs: kwargs,
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.data.message);
    }

    return data.result;
  }

  async createLead(leadData: Record<string, any>): Promise<number> {
    return this.callKw('crm.lead', 'create', [leadData]);
  }

  async updateLead(leadId: number, updateData: Record<string, any>): Promise<boolean> {
    return this.callKw('crm.lead', 'write', [[leadId], updateData]);
  }

  async getLeads(domain: any[] = [], fields: string[] = []): Promise<any[]> {
    return this.callKw('crm.lead', 'search_read', [domain, fields]);
  }
}

export const odoo = new OdooAPI(
  process.env.ODOO_URL!,
  process.env.ODOO_DB!,
  process.env.ODOO_LEAD_API_KEY!
);
