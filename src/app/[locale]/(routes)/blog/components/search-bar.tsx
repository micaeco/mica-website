'use client';

import React from 'react';

import SearchBar from '@/components/ui/search';
import TagFilter from '@/components/ui/tags-filter';
import { BlogPostTag } from '@/types';

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedTag: BlogPostTag;
  setSelectedTag: (tag: BlogPostTag) => void;
};

export default function Blog({ searchTerm, setSearchTerm, selectedTag, setSelectedTag }: Props) {
  return (
    <section className="mb-8 flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
    </section>
  );
}
