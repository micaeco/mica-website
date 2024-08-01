import React from 'react';
import Link from 'next/link';
import { Document } from '@/types/types';

const DocumentCard = ({ ...article }: Document) => {
  return (
    <Link href={`/documentation/${article.slug}`} className="block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
        <div className="grow p-6">
          <span className="mb-2 inline-block text-sm">{article.category}</span>
          <h4 className="mb-2">{article.title}</h4>
          <p className="text-gray-600">{article.summary}</p>
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;