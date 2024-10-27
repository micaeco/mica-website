import React from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getNavCta, getNavLinks } from '@/lib/constants';
import { isExternalLink } from '@/lib/utils';

export default function Footer() {
  const common = useTranslations('common');
  const t = useTranslations();

  const navItems = [...getNavLinks(t), ...getNavCta(t)];

  return (
    <footer className="bg-brand-primary py-4 text-xs text-gray-300">
      <div className="container mx-auto mt-4 p-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-4 text-xs font-bold capitalize text-gray-50">{common('contact')}</p>
            <div className="space-y-2">
              <p className="text-xs capitalize">{common('general-questions')}</p>
              <a
                href="mailto:info@mica.eco"
                className="from-brand-accent/50 to-brand-accent bg-gradient-to-br bg-clip-text font-bold text-transparent"
              >
                info@mica.eco
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold capitalize text-gray-50">
              {common('quick-links')}
            </p>
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={isExternalLink(item.href) ? '_blank' : '_self'}
                  className="hover:text-brand-accent text-xs transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold capitalize text-gray-50">{common('location')}</p>
            <p className="text-xs">Barcelona, {common('spain')}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} MICA. {common('all-rights-reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
