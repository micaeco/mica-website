import React from "react";
import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlogPostTag } from "@/types/blog";
import { BlogPostTags } from "@/lib/constants";

type Props = {
  selectedTag: BlogPostTag;
  setSelectedTag: (tag: BlogPostTag) => void;
};

export default function TagFilter({ selectedTag, setSelectedTag }: Props) {
  const t = useTranslations("blog");

  return (
    <Tabs
      value={selectedTag}
      onValueChange={(value: string) => setSelectedTag(value as BlogPostTag)}
      className="w-fit"
    >
      <TabsList className="flex h-auto flex-wrap gap-2 bg-muted p-1">
        {BlogPostTags.map((tag) => (
          <TabsTrigger key={tag} value={tag} className="capitalize">
            {t(`tags.${tag}`)}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
