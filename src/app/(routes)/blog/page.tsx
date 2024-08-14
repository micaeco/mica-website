'use client';

import React from 'react';

import BlogPosts from '@/src/components/sections/blog/BlogPosts';
import SearchBar from '@/src/components/sections/blog/SearchBar';
import { useBlogPosts } from '@/src/hooks/useBlogPosts';

export default function Blog() {
  const { filteredPosts, searchTerm, setSearchTerm, selectedTag, setSelectedTag } = useBlogPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto flex-grow px-4 py-8">
        <h2 className="mb-8 text-center font-bold">Blog</h2>
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
