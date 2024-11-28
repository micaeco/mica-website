import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { enUS, es, fr, de, it, ja, ca } from 'date-fns/locale';
import { BlogComment } from "@/types";

export const DateFnsLocale: { [key: string]: Locale } = {
  en: enUS,
  es: es,
  ca: ca,
  fr: fr,
  de: de,
  it: it,
  ja: ja,
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isExternalLink = (href: string) => {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
};

export function getTotalComments(comments: BlogComment[]): number {
  if (!comments?.length) return 0;

  return comments.length + comments.reduce((acc, comment) =>
    acc + (comment.replies ? getTotalReplies(comment) : 0),
    0
  );
}

export function getTotalReplies(comment: BlogComment): number {
  if (!comment.replies?.length) return 0;

  return comment.replies.length + comment.replies.reduce((acc, reply) =>
    acc + getTotalReplies(reply),
    0
  );
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s.-]{9,15}$/;
  return phoneRegex.test(phone);
}

export function toGoogleSheetsDate(date: Date) {
  return date.toLocaleString('en-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(',', '');
}