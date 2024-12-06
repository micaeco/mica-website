export function interpolate(template: string, params: Record<string, string | number>): string {
  return Object.keys(params).reduce((result, key) => {
    return result.replace(`{${key}}`, String(params[key]));
  }, template);
};
