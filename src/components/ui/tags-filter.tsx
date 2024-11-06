import React from 'react';
import { useTranslations } from 'next-intl';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TPostTag, PostTags } from '@/types';

type Props = {
  selectedTag: TPostTag;
  setSelectedTag: (tag: TPostTag) => void;
};

export default function TagFilter({ selectedTag, setSelectedTag }: Props) {
  const t = useTranslations('blog');

  return (
    <Tabs
      value={selectedTag}
      onValueChange={(value: string) => setSelectedTag(value as TPostTag)}
      className="w-fit"
    >
      <TabsList className="flex h-auto flex-wrap gap-2 bg-muted p-1">
        {PostTags.map((tag) => (
          <TabsTrigger key={tag} value={tag} className="capitalize">
            {t(`tags.${tag}`)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
