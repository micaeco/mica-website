import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-10 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-xl font-bold text-primary uppercase">
          <Image src="/images/logo-dark.svg" alt="Mica Logo" width={50} height={50} className="mr-1 p-1" />
          Mica
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-accent transition duration-300 px-2 py-1 active:bg-gray-200">
                Inici
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-800 hover:border-b-2 hover:border-accent transition duration-300 px-2 py-1 active:transform-y-2">
                Sobre Nosaltres
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;