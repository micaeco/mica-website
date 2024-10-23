import React from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Locale = 'en' | 'es' | 'ca';

const languages: { code: Locale; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: 'US' },
  { code: 'es', name: 'Español', flag: 'ES' },
  { code: 'ca', name: 'Català', flag: 'CAT' },
];

export default function LanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <Select onValueChange={handleLanguageChange} defaultValue={locale}>
      <SelectTrigger className="w-[150px] bg-primary text-white">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            <div className={`${className} flex flex-row items-center gap-2`}>
              <Globe />
              {lang.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
