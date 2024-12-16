import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["ca", "es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);
