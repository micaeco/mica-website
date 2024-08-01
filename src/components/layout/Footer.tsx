import React from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Inici', href: '/' },
  { name: 'Com funciona', href: '/product' },
  { name: 'Sobre Nosaltres', href: '/about' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contacte', href: '/contact' },
  { name: 'En vull un!', href: '/beta' },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-4 text-xs text-gray-300">
      <div className="container mx-auto mt-4 p-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-4 text-xs font-bold text-gray-50">
              Contacte
            </p>
            <div className="space-y-2">
              <p className="text-xs">
                Preguntes generals
              </p>
              <a href="mailto:info@mica.eco" className="block bg-gradient-to-r from-accent-200 via-accent-500 to-accent-900 bg-clip-text font-bold text-transparent">
                info@mica.eco
              </a>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold text-gray-50">
              Enllaços ràpids
            </p>
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-xs hover:text-accent-500">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold text-gray-50">
              Ubicació
            </p>
            <p className="text-xs">
              Barcelona, Espanya
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-xs">&copy; {new Date().getFullYear()} MICA. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};