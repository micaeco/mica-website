import React from "react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Globe } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Locale = "en" | "es" | "ca";

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "US" },
  { code: "es", name: "Español", flag: "ES" },
  { code: "ca", name: "Català", flag: "CAT" },
];

export default function LanguageSwitcher({
  className,
  shortened,
}: {
  className?: string;
  shortened?: boolean;
}) {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale });
  };

  const getCurrentLanguage = (code: Locale) => {
    return languages.find((lang) => lang.code === code);
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={locale}>
      <SelectTrigger className={cn("w-fit", className)}>
        <SelectValue>
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            {shortened ? locale.toUpperCase() : getCurrentLanguage(locale)?.name}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className={cn("flex items-center gap-2", className)}>
              <Globe className="h-4 w-4" />
              {lang.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
