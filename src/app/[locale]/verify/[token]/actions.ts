"use server";

import { env } from "@/lib/env";
import {
  tokenExpirationDays,
  TokenInvalidError,
  TokenExpiredError,
  ServerError,
  AppError,
} from "@/lib/constants";
import { SheetsTableService } from "@/services/database.sheets";
import { ErrorKey, SuccessKey } from "@/types/errors";
import { Lead, Token } from "@/types/lead";

export async function verifyLead(
  token: string
): Promise<{ success: boolean; code: ErrorKey | SuccessKey }> {
  try {
    const tokensTable = new SheetsTableService<Token>(env.google.tokensSpreadsheetId, [
      "email",
      "token",
    ]);
    const leadsTable = new SheetsTableService<Lead>(env.google.leadsSpreadsheetId, [
      "name",
      "surname",
      "email",
      "phone",
      "referralSource",
      "interestInBeta",
      "locale",
      "isVerified",
    ]);

    // Find token
    const tokens = await tokensTable.query({
      filters: [{ field: "token", operator: "=", value: token }],
    });

    if (tokens.length === 0) {
      throw new TokenInvalidError("Invalid verification token");
    }

    const tokenInfo = tokens[0];

    // Check if lead is already verified
    const verifiedLeads = await leadsTable.query({
      filters: [
        { field: "email", operator: "=", value: tokenInfo.email },
        { field: "isVerified", operator: "=", value: true },
      ],
    });

    if (verifiedLeads.length > 0) {
      return { success: true, code: "LEAD_VERIFIED" };
    }

    // Check token expiration
    const tokenCreatedAt = new Date(tokenInfo.createdAt);
    const expirationDate = new Date(
      tokenCreatedAt.getTime() + tokenExpirationDays * 24 * 60 * 60 * 1000
    );

    if (Date.now() > expirationDate.getTime()) {
      throw new TokenExpiredError("Verification token has expired");
    }

    // Find and update lead
    const leads = await leadsTable.query({
      filters: [{ field: "email", operator: "=", value: tokenInfo.email }],
    });

    if (leads.length === 0) {
      throw new ServerError("Lead not found for token");
    }

    await leadsTable.update(leads[0].id, { isVerified: true });
    return { success: true, code: "LEAD_VERIFIED" };
  } catch (error) {
    console.error("Failed to verify lead:", error);
    return { success: false, code: error instanceof AppError ? error.code : "UNKNOWN_ERROR" };
  }
}
