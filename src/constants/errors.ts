export const ERROR_CODES = {
  MISSING_FIELDS: 'MISSING_FIELDS',
  TOKEN_REQUIRED: 'TOKEN_REQUIRED',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  TOKEN_INVALID: 'TOKEN_INVALID',
  LEAD_ALREADY_REGISTERED: 'LEAD_ALREADY_REGISTERED',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

export const SUCCESS_CODES = {
  LEAD_REGISTERED: 'LEAD_REGISTERED',
  LEAD_VERIFIED: 'LEAD_VERIFIED',
  SUBMISSION_SENT: 'SUBMISSION_SENT',
} as const;

type ErrorCode = keyof typeof ERROR_CODES;
type SuccessCode = keyof typeof SUCCESS_CODES;

const errorMessages: Record<ErrorCode, string> = {
  MISSING_FIELDS: 'Falten camps obligatoris.',
  TOKEN_REQUIRED: 'Es requereix un token de verificació.',
  TOKEN_EXPIRED: 'El token de verificació ha caducat.',
  TOKEN_INVALID: 'El token de verificació no és vàlid.',
  LEAD_ALREADY_REGISTERED: 'Aquest correu electrònic ja està registrat.',
  INTERNAL_ERROR: "S'ha produït un error intern. Si us plau, torna-ho a provar més tard.",
};

const successMessages: Record<SuccessCode, string> = {
  LEAD_REGISTERED:
    'Registre completat amb èxit. Si us plau, comprova el teu correu electrònic per a la verificació.',
  LEAD_VERIFIED: 'Correu electrònic verificat amb èxit.',
  SUBMISSION_SENT: 'Missatge enviat correctament.',
};

export function getErrorMessage(code: ErrorCode): string {
  return errorMessages[code] || errorMessages.INTERNAL_ERROR;
}

export function getSuccessMessage(code: SuccessCode): string {
  return successMessages[code] || 'Operació completada amb èxit.';
}
