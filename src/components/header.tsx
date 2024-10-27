'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

import LanguageSwitcher from '@/components/language-switcher';
import { Button } from '@/components/ui/button';
import { getNavLinks, getNavCta } from '@/lib/constants';
import { cn, isExternalLink } from '@/lib/utils';

const MOBILE_BREAKPOINT = 1340; // Corresponds to Tailwind's 'lg' breakpoint

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const pathname = usePathname();

  const t = useTranslations();

  const navLinks = getNavLinks(t);
  const navCta = getNavCta(t);

  const checkIsMobile = useCallback(() => {
    return window.innerWidth < MOBILE_BREAKPOINT;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [checkIsMobile]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="border-gray-20 sticky top-0 z-20 border-b bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        <Link
          href="/"
          className="z-30 mr-6 flex items-center space-x-2 font-bold"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image src="/logos/logo.webp" alt="Logo" width={35} height={35} />
          <h5>MICA</h5>
        </Link>

        {!isMobile ? (
          <nav className="flex items-center space-x-4">
            <div className="flex items-center space-x-6">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm text-muted-foreground transition-colors hover:text-primary',
                    pathname.replace(/\/[^/]*\/|\/[^/]*$/, '/') == item.href ? 'text-primary' : ''
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-x-4">
              {navCta.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={isExternalLink(item.href) ? '_blank' : '_self'}
                >
                  <Button variant="outline">{item.label}</Button>
                </Link>
              ))}
            </div>
            <LanguageSwitcher />
          </nav>
        ) : (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-30 h-6 w-6 text-gray-500 transition-colors duration-300 hover:text-gray-900"
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
                {[...navLinks, ...navCta].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={isExternalLink(item.href) ? '_blank' : '_self'}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'text-md flex items-center text-muted-foreground transition-colors hover:text-primary',
                      pathname.replace(/\/[^/]*\/|\/[^/]*$/, '/') == item.href ? 'text-primary' : ''
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex justify-end">
                <LanguageSwitcher className="text-lg" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
