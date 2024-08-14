'use client';

import React from 'react';

import SearchBar from '@/src/components/ui/SearchBox';
import TagFilter from '@/src/components/ui/TagsFilter';
import { TPostTag } from '@/src/types';

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
