import { Clock, User, Tag } from 'lucide-react';
import { usePathname } from 'next/navigation';

import MarkdownRenderer from '@/src/components/ui/markdown';
import GoBack from '@/src/components/ui/go-back';
import { IPost } from '@/src/types';

type Props = {
  post: IPost;
};

export default function Post({ post }: Props) {
  const path = usePathname();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <GoBack currentPath={path} text={'Tornar a blog'} />

      <article className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="p-6">
          <h1 className="mb-4 text-3xl font-bold">{post.title}</h1>

          <div className="mb-4 flex items-center text-sm font-light">
            <Clock className="mr-1 size-4" />
            <span className="mr-4">{post.date?.toString() || 'Data desconeguda'}</span>
            <User className="mr-1 size-4" />
            <span className="mr-4">{post.author || 'Autor desconegut'}</span>
            <Tag className="mr-1 size-4" />
            <span>{post.tag || 'Categoria desconeguda'}</span>
          </div>

          {post.content ? (
            <MarkdownRenderer content={post.content} />
          ) : (
            <p>No hi ha contingut disponible.</p>
          )}
        </div>
      </article>
    </div>
  );
}
