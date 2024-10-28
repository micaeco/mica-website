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
  const tTags = useTranslations('blog.tags');

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <GoBack text={common('go-back')} />

      <h3 className="font-bold">{post.title}</h3>
      <div className="mb-8 flex flex-wrap items-center gap-4 text-sm font-light">
        <div className="flex gap-1">
          <Clock size={15} />
          {post.date?.toString() || common('unknown-date')}
        </div>
        <div className="flex gap-1 capitalize">
          <User size={15} />
          {post.author || common('unknown-author')}
        </div>
        <div className="flex gap-1 capitalize">
          <Tag size={15} />
          {tTags(post.tag) || common('unknown-tag')}
        </div>
        <div className="flex gap-1 capitalize">
          <Book size={15} />
          {languageMap[post.lang]}
        </div>
      </div>

      {post.content ? (
        <MarkdownRenderer content={post.content} />
      ) : (
        <p className="capitalize">{common('no-content-available')}</p>
      )}
    </article>
  );
}
