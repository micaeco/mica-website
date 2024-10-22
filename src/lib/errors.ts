export const ERROR_MESSAGES = {
  MISSING_FIELDS: 'Falten camps obligatoris.',
  TOKEN_REQUIRED: 'Es requereix un token de verificació.',
  TOKEN_EXPIRED: 'El token de verificació ha caducat.',
  TOKEN_INVALID: 'El token de verificació no és vàlid.',
  LEAD_ALREADY_REGISTERED: 'Aquest correu electrònic ja està registrat.',
  INTERNAL_ERROR: "S'ha produït un error intern. Si us plau, torna-ho a provar més tard.",
} as const;

export const SUCCESS_MESSAGES = {
  LEAD_REGISTERED: 'Registre completat amb èxit. Si us plau, comprova el teu correu electrònic per a la verificació.',
  LEAD_VERIFIED: 'Correu electrònic verificat amb èxit.',
  SUBMISSION_SENT: 'Missatge enviat correctament.',
} as const;

export type ErrorCode = keyof typeof ERROR_MESSAGES;
export type SuccessCode = keyof typeof SUCCESS_MESSAGES;

export function getErrorMessage(code: ErrorCode): string {
  return ERROR_MESSAGES[code] || ERROR_MESSAGES.INTERNAL_ERROR;
}

export function getSuccessMessage(code: SuccessCode): string {
  return SUCCESS_MESSAGES[code] || 'Operació completada amb èxit.';
}