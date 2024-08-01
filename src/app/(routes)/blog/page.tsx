'use client';

import React from 'react';

import BlogPosts from '@/src/components/blog/BlogPosts';
import SearchBar from '@/src/components/blog/SearchBar';
import TagFilter from '@/src/components/blog/TagsFilter';
import { useBlogPosts } from '@/src/hooks/useBlogPosts';

export default function Blog() {
  const { 
    filteredPosts, 
    searchTerm, 
    setSearchTerm, 
    selectedTag, 
    setSelectedTag 
  } = useBlogPosts();

  return (
    <div className="3xl:px-32 mb-8 min-h-screen bg-gray-50 px-4 lg:px-6">
      <main className="mx-auto max-w-7xl rounded-lg p-4 sm:p-6 md:p-8">
        <h3 className="mb-8 text-center font-bold">
          Blog
        </h3>
        
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        </div>

        <BlogPosts posts={filteredPosts} />
      </main>
    </div>
  );
};