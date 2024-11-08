import React from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';
import { getNavCta, getNavLinks } from '@/lib/constants';
import { isExternalLink } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const common = useTranslations('common');
  const t = useTranslations();

  const navLinks = getNavLinks(t);
  const navCta = getNavCta(t);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { platform: 'x', url: 'https://x.com/micaeco_bcn' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/micaeco' },
    { platform: 'github', url: 'https://github.com/micaeco' },
    { platform: 'youtube', url: 'https://www.youtube.com/@micaeco_bcn/videos' },
  ];

  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="mx-auto max-w-5xl px-8 py-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase text-primary">{common('company')}</h2>
            <nav className="flex flex-col gap-4">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={isExternalLink(item.href) ? '_blank' : undefined}
                  rel={isExternalLink(item.href) ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-1 text-xs hover:text-primary"
                >
                  {item.label}
                  {isExternalLink(item.href) && <ExternalLink size={14} />}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase text-primary">
              {common('quick-links')}
            </h2>
            <nav className="flex flex-col gap-4">
              {navCta.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={isExternalLink(item.href) ? '_blank' : undefined}
                  rel={isExternalLink(item.href) ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-1 text-xs hover:text-primary"
                >
                  {item.label}
                  {isExternalLink(item.href) && <ExternalLink size={14} />}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase text-primary">{common('legal')}</h2>
            <Link href="/privacy-policy" className="text-xs hover:text-primary">
              {t('navLinks.privacy-policy')}
            </Link>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-bold uppercase text-primary">{common('location')}</h2>
            <p className="text-xs">Barcelona, {common('spain')}</p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div>
            <Link href="/" className="mb-2 flex items-center gap-2">
              <Image
                src="/logos/logo-dark.svg"
                alt="MICA Logo"
                width={30}
                height={30}
                className="opacity-70"
              />
              <span className="text-lg font-black">MICA</span>
            </Link>
            <p className="text-xs">
              &copy; {currentYear} MICA.ECO. {common('all-rights-reserved')}
            </p>
          </div>

          <nav className="flex gap-4">
            {socialLinks.map(({ platform, url }, index) => (
              <Button key={index} size="icon" variant="ghost" className="group" asChild>
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={`/icons/${platform}-icon.svg`}
                    alt={`${platform} icon`}
                    width={20}
                    height={20}
                    className="opacity-50 transition-opacity group-hover:opacity-100"
                  />
                  <span className="sr-only">MICA on {platform}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
