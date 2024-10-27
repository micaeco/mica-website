import { Clock, User, Tag, Book } from 'lucide-react';
import { useTranslations } from 'next-intl';

import MarkdownRenderer from '@/components/ui/markdown';
import GoBack from '@/components/ui/go-back';
import { IPost } from '@/types';
import { languageMap } from '@/lib/constants';

type Props = {
  post: IPost;
};

export default function Post({ post }: Props) {
  const common = useTranslations('common');

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <GoBack text={common('go-back')} />

      <article>
        <h3 className="mb-4 font-bold">{post.title}</h3>

        <div className="mb-4 flex items-center text-sm font-light">
          <Clock className="mr-1 size-4" />
          <span className="mr-4">{post.date?.toString() || common('unknown-date')}</span>
          <User className="mr-1 size-4" />
          <span className="mr-4 first-letter:capitalize">
            {post.author || common('unknown-author')}
          </span>
          <Tag className="mr-1 size-4" />
          <span className="mr-4 capitalize">{post.tag || common('unknown-tag')}</span>
          <Book className="mr-1 size-4" />
          <span className="capitalize">{languageMap[post.lang]}</span>
        </div>

        {post.content ? (
          <MarkdownRenderer content={post.content} />
        ) : (
          <p className="capitalize">{common('no-content-available')}</p>
        )}
      </article>
    </div>
  );
}
