'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Inici' },
  { href: '/product', label: 'Com funciona' },
  { href: '/beta', label: 'En vull un!' },
  { href: '/about', label: 'Qui som?' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contacte' },
];

const MOBILE_BREAKPOINT = 1280; // Corresponds to Tailwind's 'lg' breakpoint

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const pathname = usePathname();

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

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        <Link
          href="/"
          className="z-30 flex items-center space-x-2 font-bold"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image src="/logos/logo.webp" alt="Logo" width={35} height={35} />
          <h5>MICA</h5>
        </Link>

        {!isMobile && (
          <nav className="flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 border-transparent text-sm font-light transition-colors duration-300 hover:border-zinc-300 ${item.href == pathname ? 'border-zinc-500' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="space-x-4">
              <Link
                href="https://app.mica.eco"
                target="_blank"
                className="border-input bg-background rounded-lg border-2 px-4 py-2 text-sm transition-all duration-300 hover:bg-primary/20"
              >
                Demo app
              </Link>
              <Link
                href="/register"
                className="border-input rounded-lg border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-primary/90"
              >
                Registra't
              </Link>
            </div>
          </nav>
        )}

        {isMobile && (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-30 h-6 w-6 text-gray-500 transition-colors duration-300 hover:text-gray-900"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Menu size={24} />
              </motion.div>
            )}
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
            className="fixed inset-0 bg-white"
          >
            <div className="flex h-full flex-col p-8 pt-24">
              <div className="flex flex-col space-y-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`w-fit border-b-2 border-transparent text-lg font-light transition-colors duration-300 hover:border-zinc-300 ${pathname == item.href ? 'border-zinc-500' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="https://app.mica.eco"
                  target="_blank"
                  className="text-lg font-light transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo app
                </Link>
                <Link
                  href="/register"
                  className="text-lg font-light transition-colors duration-300 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Registra't
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
