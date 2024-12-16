export interface Lead {
  name: string;
  surname: string;
  email: string;
  phone?: string;
  interestInBeta?: boolean;
  referralSource?: string;
  locale: string;
  isVerified: boolean;
}

export interface Token {
  email: string;
  token: string;
}
