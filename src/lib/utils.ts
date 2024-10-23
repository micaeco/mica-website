import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseReadme(rawContent: string): { metadata: Record<string, string>; content: string } {
  const lines = rawContent.split('\n');
  const metadata: Record<string, string> = {};
  let contentStart = 0;

  if (lines[0].trim() === '---') {
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        contentStart = i + 1;
        break;
      }
      const [key, ...valueParts] = lines[i].split(':');
      const value = valueParts.join(':').trim();
      if (key && value) {
        metadata[key.trim()] = value;
      }
    }
  }

  const content = lines.slice(contentStart).join('\n').trim();

  return { metadata, content };
}

export const isExternalLink = (href: string) => {
  return href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
};