import React from 'react';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  const common = useTranslations('common');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full md:w-64">
      <input
        type="text"
        placeholder={common('search').charAt(0).toUpperCase() + common('search').slice(1) + '...'}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-primary"
      >
        <Search size={20} />
      </button>
    </form>
  );
}
