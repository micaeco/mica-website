import React from 'react';
import { useTranslations } from 'next-intl';

import { TPostTag } from '@/types';

type Props = {
  selectedTag: TPostTag;
  setSelectedTag: (tag: TPostTag) => void;
};

const tags: TPostTag[] = ['article', 'manual', 'others'];

export default function TagFilter({ selectedTag, setSelectedTag }: Props) {
  const t = useTranslations('blog');

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setSelectedTag('all')}
        className={`rounded-full px-3 py-1 text-sm first-letter:capitalize ${
          selectedTag === 'all'
            ? 'bg-primary text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {t('tags.all')}
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`rounded-full px-3 py-1 text-sm first-letter:capitalize ${
            selectedTag === tag
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {t(`tags.${tag}`)}
        </button>
      ))}
    </div>
  );
}
