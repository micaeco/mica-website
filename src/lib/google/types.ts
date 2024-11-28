export const LeadErrors = ['TOKEN_INVALID', 'TOKEN_EXPIRED', 'ALREADY_VERIFIED'] as const;
export type LeadError = typeof LeadErrors[number];

export interface LeadData {
  name: string;
  surname: string;
  email: string;
  phone?: string;
  interestInBeta?: boolean;
  referralSource?: string;
  locale: string;
}

export interface UnverifiedLead extends Omit<LeadData, 'surname'> {
  token: string;
  tokenExpiration: Date;
  createdAt: Date;
}

export interface VerifiedLead extends Omit<LeadData, 'surname'> {
  createdAt: Date;
}

export interface SheetProperties {
  title: string;
  sheetId: number;
}

export interface GoogleSheetResponse {
  data: {
    sheets: {
      properties: SheetProperties;
    }[];
  };
}