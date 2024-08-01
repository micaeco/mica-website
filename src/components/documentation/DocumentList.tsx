'use client';

import React, { useState } from 'react';

import DocumentCard from '@/src/components/ui/DocumentCard';
import { Document } from '@/src/types/types';

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  const [visibleDocuments, setVisibleDocuments] = React.useState(4);

  const loadMore = () => {
    setVisibleDocuments(prev => Math.min(prev + 4, documents.length));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {documents.slice(0, visibleDocuments).map((doc, index) => (
          <DocumentCard key={index} {...doc} />
        ))}
      </div>
      {visibleDocuments < documents.length && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default DocumentList;