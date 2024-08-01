import React from 'react';
import { DocsCategory } from '@/src/types/types';

const allCategories: (DocsCategory | 'All')[] = ['All', 'FAQs', 'Guía', 'Article', 'Altres'];

interface CategoryFilterProps {
  selectedCategory: DocsCategory | 'All';
  setSelectedCategory: (category: DocsCategory | 'All') => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {allCategories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`rounded-full px-3 py-1 text-sm ${
            selectedCategory === category
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;