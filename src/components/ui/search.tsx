import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  const [tempSearchTerm, setTempSearchTerm] = useState('');

  const common = useTranslations('common');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(tempSearchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-64">
      <Input
        type="text"
        placeholder={common('search').charAt(0).toUpperCase() + common('search').slice(1) + '...'}
        value={tempSearchTerm}
        onChange={(e) => setTempSearchTerm(e.target.value)}
        className="pr-12"
      />
      <Button
        type="submit"
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0 h-full px-3"
      >
        <Search className="text-muted-foreground" size={20} />
      </Button>
    </form>
  );
}
