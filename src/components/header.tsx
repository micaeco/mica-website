'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/lib/i18n/routing';
import Image from 'next/image';
import { Menu, X, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/language-switcher';
import { Button } from '@/components/ui/button';
import { cn, isExternalLink } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const pathname = usePathname();
  const tNavLinks = useTranslations('navLinks');
  const tNavCta = useTranslations('navCta');
  const locale = useLocale();

  const navLinks = [
    { href: '/product', page: 'product' },
    { href: '/beta', page: 'beta' },
    { href: '/about', page: 'about' },
    { href: '/blog', page: 'blog' },
    { href: '/faqs', page: 'faqs' },
  ];

  const navCta = [
    { href: '/contact', page: 'contact' },
    { href: `https://app.mica.eco/${locale}`, page: 'demo' },
    { href: '/register', page: 'register' },
  ];

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth < 1400;
    const handleResize = () => setIsMobile(checkIsMobile());

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMobile === false) setIsMenuOpen(false);
  }, [isMobile]);

  if (isMobile === null) return null;

  const Logo = () => (
    <Link
      href="/"
      className="z-30 mr-4 flex items-center space-x-2 font-semibold"
      onClick={() => setIsMenuOpen(false)}
    >
      <Image src="/logos/logo.webp" alt="Logo" width={35} height={35} />
      <h5 className="font-semibold">MICA</h5>
    </Link>
  );

  const NavLink = ({
    href,
    page,
    onClick,
    className,
  }: {
    href: string;
    page: string;
    onClick?: () => void;
    className?: string;
  }) => (
    <Link
      href={href}
      target={isExternalLink(href) ? '_blank' : '_self'}
      onClick={onClick}
      className={cn(
        'flex items-center transition-colors',
        className,
        !className && [
          'text-muted-foreground hover:text-foreground',
          pathname.replace(/\/[^/]*\/|\/[^/]*$/, '/') === href ? 'text-foreground' : '',
          isMobile ? 'text-md' : 'text-sm',
        ]
      )}
    >
      {tNavLinks.has(page) ? tNavLinks(page) : tNavCta(page)}
      {isExternalLink(href) && <ExternalLink size={16} className="ml-1 inline" />}
    </Link>
  );

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-3">
        {isMobile && <Logo />}

        {!isMobile ? (
          <nav className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-6">
              <Logo />
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
            </div>
            <div className="flex space-x-4">
              <LanguageSwitcher shortened />
              {navCta.map(({ href, page }, index) => (
                <Button key={index} variant={page === 'register' ? 'default' : 'secondary'}>
                  <Link href={href} target={isExternalLink(href) ? '_blank' : '_self'}>
                    {tNavCta(page)}
                    {isExternalLink(href) && <ExternalLink size={16} className="ml-1 inline" />}
                  </Link>
                </Button>
              ))}
            </div>
          </nav>
        ) : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-30 h-6 w-6 text-muted-foreground transition-colors duration-300 hover:text-foreground"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <AnimatePresence>{isMenuOpen ? <X size={24} /> : <Menu size={24} />}</AnimatePresence>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 overflow-y-auto bg-white"
            style={{ top: 'var(--header-height, 60px)' }}
          >
            <div className="flex min-h-full flex-col justify-between space-y-6 p-8 text-lg">
              <div className="flex flex-col items-start justify-start space-y-6">
                {[...navLinks, ...navCta].map((link, index) => (
                  <NavLink key={index} {...link} onClick={() => setIsMenuOpen(false)} />
                ))}
              </div>
              <LanguageSwitcher className="text-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
