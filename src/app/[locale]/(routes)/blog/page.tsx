'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

import { useBlogPosts } from '@/hooks/useBlogPosts';
import BlogPosts from '@/components/sections/blog/blog-posts';
import SearchBar from '@/components/sections/blog/search-bar';
import Loading from '@/components/sections/common/loading';

export default function Blog() {
  const { filteredPosts, searchTerm, isLoading, setSearchTerm, selectedTag, setSelectedTag } =
    useBlogPosts();
  const common = useTranslations('common');

  if (isLoading) return <Loading />;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto flex-grow px-4 py-8">
        <h2 className="mb-8 text-center font-bold first-letter:capitalize">{common('blog')}</h2>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
        <BlogPosts posts={filteredPosts!} />
      </div>
    </main>
  );
}
