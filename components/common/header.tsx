'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: "/", label: "Inici" },
  { href: "/product", label: "Com funciona" },
  { href: "/beta", label: "En vull un!" },
  { href: "/about", label: "Sobre Nosaltres" },
  { href: "/contact", label: "Contacte" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderDesktopNav = () => (
    <>
      <nav className="grow">
        <ul className="flex justify-center space-x-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="px-2 py-1 text-gray-600 transition-all duration-300 hover:text-gray-900">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/register" className="rounded-lg bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-md">
          Registra&apos;t
        </Link>
      </div>
    </>
  );

  const renderMobileNav = () => (
    <>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-20 transition-transform duration-300 hover:scale-110">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={`fixed right-0 top-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex h-full flex-col items-start space-y-4 p-4 pt-16">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="px-2 py-1 text-gray-600 transition-all duration-300 hover:text-gray-900">
                {item.label}
              </Link>
            </li>
          ))}
          <Link href="/register" className="rounded-lg bg-primary px-4 py-2 text-white transition-all duration-300 hover:bg-primary-700 hover:shadow-md">
            Registra&apos;t
          </Link>
        </ul>
      </nav>
    </>
  );

  return (
    <header className="sticky top-0 z-20 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center text-xl font-bold uppercase text-primary transition-transform duration-300 hover:scale-105">
            <Image src="/images/logo-dark.svg" alt="Mica Logo" width={35} height={35} className="mr-2" />
            Mica
          </Link>
        </div>
        {typeof window !== 'undefined' && (isMobile ? renderMobileNav() : renderDesktopNav())}
      </div>
    </header>
  );
};

export default Header;