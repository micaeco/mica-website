'use client';

import React from 'react';

import SearchBar from '@/components/ui/search-box';
import TagFilter from '@/components/ui/tags-filter';
import { TPostTag } from '@/types';

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTag: TPostTag;
  setSelectedTag: (tag: TPostTag) => void;
};

export default function Blog({ searchTerm, setSearchTerm, selectedTag, setSelectedTag }: Props) {
  return (
    <section className="mb-8 flex flex-col justify-between gap-4 md:flex-row">
      <div className="md:w-1/2">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <div>
        <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      </div>
    </section>
  );
}
