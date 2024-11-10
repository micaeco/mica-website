import { Locale } from '@/i18n/routing';

export interface Faq {
  lang: Locale;
  question: string;
  answer: string;
  lastUpdated?: Date;
}