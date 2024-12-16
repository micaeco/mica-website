import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { enUS, es, fr, de, it, ja, ca } from "date-fns/locale";
import { BlogComment } from "@/types/blog";

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
  return twMerge(clsx(inputs));
}

export const isExternalLink = (href: string) => {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//");
};

export function getTotalComments(comments: BlogComment[]): number {
  if (!comments?.length) return 0;

  return (
    comments.length +
    comments.reduce((acc, comment) => acc + (comment.replies ? getTotalReplies(comment) : 0), 0)
  );
}

export function getTotalReplies(comment: BlogComment): number {
  if (!comment.replies?.length) return 0;

  return (
    comment.replies.length + comment.replies.reduce((acc, reply) => acc + getTotalReplies(reply), 0)
  );
}

export const timeout = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
