import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="shadow-xl bg-gradient-to-br from-primary to-gray-800 text-gray-300 py-8">
      <div className="text-sm container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-gray-50">Contacte</h3>
            <div className="space-y-2">
              <p>Preguntes generals</p>
              <a href="mailto:info@mica.eco" className="block font-bold bg-gradient-to-r from-accent-200 via-accent-500 to-accent-900 bg-clip-text text-transparent">
                info@mica.eco
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-gray-50">Enllaços ràpids</h3>
            <nav className="space-y-2">
              <Link href="/" className="block hover:text-accent-300 transition-colors">
                Inici
              </Link>
              <Link href="/about" className="block hover:text-accent-300 transition-colors">
                Sobre Nosaltres
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-gray-50">Ubicació</h3>
            <p>Barcelona, Espanya</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; {new Date().getFullYear()} Mica. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;