import { ErrorKey } from "@/types/errors";

export const maxCommentaryDepth = 10;

export const tokenExpirationDays = 30;

type TagKey = keyof IntlMessages["blog"]["tags"];
export const BlogPostTags: TagKey[] = ["all", "article", "manual", "others"];

export const languageMap: { [key: string]: string } = {
  ca: "Català",
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  nl: "Nederlands",
  pl: "Polski",
  ru: "Русский",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
  ar: "العربية",
  hi: "हिन्दी",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  th: "ไทย",
  cs: "Čeština",
  sv: "Svenska",
  da: "Dansk",
  fi: "Suomi",
} as const;

export class AppError extends Error {
  constructor(
    public code: ErrorKey,
    public statusCode: number = 400,
    public metadata?: Record<string, unknown>,
    message?: string
  ) {
    super(message);
    this.name = "AppError";
  }
}

export class ServerError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("SERVER_ERROR", 500, metadata, message);
  }
}

export class UnknownError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("UNKNOWN_ERROR", 500, metadata, message);
  }
}

export class NotFoundError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("NOT_FOUND", 404, metadata, message);
  }
}

export class RateLimitError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("RATE_LIMIT_EXCEEDED", 429, metadata, message);
  }
}

export class TokenInvalidError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("TOKEN_INVALID", 400, metadata, message);
  }
}

export class TokenExpiredError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("TOKEN_EXPIRED", 400, metadata, message);
  }
}

export class AlreadyVerifiedError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("ALREADY_VERIFIED", 400, metadata, message);
  }
}

export class MissingFieldsError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("MISSING_FIELDS", 400, metadata, message);
  }
}

export class InvalidEmailError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("INVALID_EMAIL", 400, metadata, message);
  }
}

export class InvalidPhoneError extends AppError {
  constructor(message?: string, metadata?: Record<string, unknown>) {
    super("INVALID_PHONE", 400, metadata, message);
  }
}
