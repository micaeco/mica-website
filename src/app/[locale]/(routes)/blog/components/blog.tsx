'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { useBlogPosts } from '@/hooks/use-blog-posts';
import BlogPosts from './blog-posts';
import SearchBar from './search-bar';
import Loading from '@/components/loading';

export default function BlogContent() {
  const { filteredPosts, searchTerm, isLoading, setSearchTerm, selectedTag, setSelectedTag } =
    useBlogPosts();
  const common = useTranslations('common');

  if (isLoading) return <Loading />;

  return (
    <main className="bg-white px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center font-bold capitalize">{common('blog')}</h2>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <BlogPosts posts={filteredPosts} />
      </div>
    </main>
  );
}
