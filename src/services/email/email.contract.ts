export interface EmailService {
  send(to: string, from: string, subject: string, text: string, html?: string): Promise<void>;
}
