'use client';

import React from 'react';
import { Frown } from 'lucide-react';

import BlogPosts from '@/src/components/blog/BlogPosts';
import SearchBar from '@/src/components/blog/SearchBar';
import TagFilter from '@/src/components/blog/TagsFilter';
import { useBlogPosts } from '@/src/hooks/useBlogPosts';

export default function Blog() {
  const { filteredPosts, searchTerm, setSearchTerm, selectedTag, setSelectedTag } = useBlogPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto flex-grow px-4 py-8">
        <h1 className="mb-8 text-center text-4xl font-bold">Blog</h1>

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row">
          <div className="md:w-1/2">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
          <div>
            <TagFilter selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <BlogPosts posts={filteredPosts} />
        ) : (
          <div className="flex flex-row items-center justify-center gap-2 py-16">
            <Frown />
            <p className="text-center">No s'han trobat articles</p>
          </div>
        )}
      </div>
    </main>
  );
}
