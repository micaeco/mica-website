import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary py-8 text-gray-300 shadow-xl">
      <div className="container mx-auto p-4 text-sm">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-bold text-gray-50">Contacte</h3>
            <div className="space-y-2">
              <p>Preguntes generals</p>
              <a href="mailto:info@mica.eco" className="block bg-gradient-to-r from-accent-200 via-accent-500 to-accent-900 bg-clip-text font-bold text-transparent">
                info@mica.eco
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-gray-50">Enllaços ràpids</h3>
            <nav className="space-y-2">
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
              <Link href="/docs" className="block transition-colors hover:text-accent-300">
                Contacte
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-gray-50">Ubicació</h3>
            <p>Barcelona, Espanya</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Mica. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;