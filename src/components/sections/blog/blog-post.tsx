import { Clock, User, Tag, Book } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import MarkdownRenderer from '@/components/ui/markdown';
import GoBack from '@/components/ui/go-back';
import { IPost } from '@/types';
import { languageMap } from '@/lib/constants';
import { string } from 'zod';

type Props = {
  post: IPost;
};

export default function Post({ post }: Props) {
  const path = usePathname();
  const common = useTranslations('common');

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <GoBack text={common('go-back')} />

      <article>
        <div className="p-6">
          <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>

          <div className="mb-4 flex items-center text-sm font-light">
            <Clock className="mr-1 size-4" />
            <span className="mr-4 first-letter:capitalize">
              {post.date?.toString() || common('unknown-date')}
            </span>
            <User className="mr-1 size-4" />
            <span className="mr-4 first-letter:capitalize">
              {post.author || common('unknown-author')}
            </span>
            <Tag className="mr-1 size-4" />
            <span className="mr-4 first-letter:capitalize">
              {post.tag || common('unknown-tag')}
            </span>
            <Book className="mr-1 size-4" />
            <span className="first-letter:capitalize">{languageMap[post.lang]}</span>
          </div>

          {post.content ? (
            <MarkdownRenderer content={post.content} />
          ) : (
            <p className="first-letter:capitalize">{common('no-content-available')}</p>
          )}
        </div>
      </article>
    </div>
  );
}
