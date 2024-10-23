import React from 'react';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/routing';
import { IPost } from '@/types';

type Props = {
  post: IPost;
};

export default function PostCard({ post }: Props) {
  const t = useTranslations('blog');

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
        <div className="grow p-6">
          <span className="mb-2 inline-block text-sm first-letter:capitalize">
            {t(`tags.${post.tag}`)}
          </span>
          <h4 className="mb-2 first-letter:capitalize">{post.title}</h4>
          <p className="font-light first-letter:capitalize">{post.summary}</p>
        </div>
      </div>
    </Link>
  );
}
