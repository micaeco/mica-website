'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: "/", label: "Inici" },
  { href: "/product", label: "Com funciona" },
  { href: "/beta", label: "En vull un!" },
  { href: "/about", label: "Sobre Nosaltres" },
  { href: "/documentation", label: "Documentació" },
  { href: "/contact", label: "Contacte" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-xl font-bold uppercase text-primary transition-transform duration-300 hover:scale-105">
            <Image src="/images/logo-dark.svg" alt="MICA Logo" width={35} height={35} className="mr-2" />
            MICA
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-20 transition-transform duration-300 hover:scale-110 xl:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation menu */}
        <nav className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out xl:static xl:size-auto xl:translate-x-0 xl:shadow-none ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} xl:flex xl:grow xl:justify-center`}>
          <ul className="flex h-full flex-col items-start space-y-4 p-4 pt-16 lg:flex-row lg:items-center lg:space-x-4 lg:space-y-0 lg:p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="px-2 py-1 text-sm text-gray-600 transition-all duration-300 hover:text-gray-900">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Register button */}
        <div className="hidden xl:block">
          <Link href="/register" className="rounded-lg bg-primary px-4 py-2 text-sm text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-md">
            Registra&apos;t
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;