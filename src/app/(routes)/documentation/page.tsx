'use client';

import React from 'react';

import DocumentList from '@/src/components/documentation/documentList';
import SearchBar from '@/src/components/documentation/searchBar';
import CategoryFilter from '@/src/components/documentation/categoryFilter';
import { useDocuments } from '@/src/hooks/useDocuments';

const DocumentationPage: React.FC = () => {
  const { 
    filteredDocuments, 
    searchTerm, 
    setSearchTerm, 
    selectedCategory, 
    setSelectedCategory 
  } = useDocuments();

  return (
    <div className="3xl:px-32 min-h-screen bg-gray-50 px-4 lg:px-6">
      <main className="mx-auto max-w-7xl rounded-lg p-4 sm:p-6 md:p-8">
        <h3 className="mb-8 text-center font-bold">
          Documentació
        </h3>
        
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </div>

        <DocumentList documents={filteredDocuments} />
      </main>
    </div>
  );
};

export default DocumentationPage;