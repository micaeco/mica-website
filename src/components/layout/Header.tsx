'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: "/", label: "Inici" },
  { href: "/product", label: "Com funciona" },
  { href: "/about", label: "Sobre Nosaltres" },
  { href: "/faqs", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacte" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-20 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-primary">
            <Image src="/logos/logo-dark.svg" alt="Logo" width={35} height={35} className="mr-2" />
            <span>MICA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex xl:items-center xl:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Register button (desktop) */}
          <div className="hidden xl:block">
            <Link
              href="/beta"
              className="rounded-lg bg-primary px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-md"
            >
              En vull un!
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="z-20 text-gray-500 transition-colors duration-300 hover:text-gray-900 xl:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-y-0 right-0 z-30 w-64 bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out md:hidden">
            <button
              onClick={toggleMenu}
              className="absolute right-4 top-4 text-gray-500 transition-colors duration-300 hover:text-gray-900"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <div className="mt-12 flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/register"
                className="rounded-lg bg-primary px-4 py-2 text-center text-sm text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-md"
                onClick={toggleMenu}
              >
                En vull un!
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};