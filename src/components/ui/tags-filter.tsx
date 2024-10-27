import React from 'react';
import { useTranslations } from 'next-intl';

import { TPostTag, PostTags } from '@/types';

type Props = {
  selectedTag: TPostTag;
  setSelectedTag: (tag: TPostTag) => void;
};

export default function TagFilter({ selectedTag, setSelectedTag }: Props) {
  const t = useTranslations('blog');

  return (
    <div className="flex flex-wrap gap-2">
      {PostTags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`rounded-full px-3 py-1 text-sm capitalize ${
            selectedTag === tag
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-accent'
          }`}
        >
          {t(`tags.${tag}`)}
        </button>
      ))}
    </div>
  );
}
