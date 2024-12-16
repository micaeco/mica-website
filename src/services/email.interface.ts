export interface EmailService {
  send(to: string, subject: string, text: string, html?: string): Promise<void>;
}
