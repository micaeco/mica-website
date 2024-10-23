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
    <footer className="bg-primary py-4 text-xs text-gray-300">
      <div className="container mx-auto mt-4 p-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-4 text-xs font-bold text-gray-50 first-letter:capitalize">
              {common('contact')}
            </p>
            <div className="space-y-2">
              <p className="text-xs first-letter:capitalize">{common('general-questions')}</p>
              <a
                href="mailto:info@mica.eco"
                className="block bg-gradient-to-r from-accent-200 via-accent-500 to-accent-900 bg-clip-text font-bold text-transparent"
              >
                info@mica.eco
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold text-gray-50 first-letter:capitalize">
              {common('quick-links')}
            </p>
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={isExternalLink(item.href) ? '_blank' : '_self'}
                  className="text-xs hover:text-accent-500"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold text-gray-50 first-letter:capitalize">
              {common('location')}
            </p>
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
