import React from 'react';
import Link from 'next/link';

const Footer = () => {
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
            <nav className="space-y-1">
              <Link href="/" className="block transition-colors hover:text-accent-300">
                Inici
              </Link>
              <Link href="/product" className="block transition-colors hover:text-accent-300">
                Com funciona
              </Link>
              <Link href="/product" className="block transition-colors hover:text-accent-300">
                En vull un!
              </Link>
              <Link href="/about" className="block transition-colors hover:text-accent-300">
                Sobre Nosaltres
              </Link>
              <Link href="/documentation" className="block transition-colors hover:text-accent-300">
                Documentació
              </Link>
              <Link href="/contact" className="block transition-colors hover:text-accent-300">
                Contacte
              </Link>
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

export default Footer;