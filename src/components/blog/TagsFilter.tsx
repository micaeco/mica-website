import React from 'react';

import { TPostTag, PostTagList } from '@/src/types';

const tags = PostTagList;

type Props = {
  selectedTag: TPostTag | 'Tot';
  setSelectedTag: (tag: TPostTag | 'Tot') => void;
};

export default function TagFilter({ selectedTag, setSelectedTag }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setSelectedTag('Tot')}
        className={`rounded-full px-3 py-1 text-sm ${
          selectedTag === 'Tot'
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Tot
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`rounded-full px-3 py-1 text-sm ${
            selectedTag === tag
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
