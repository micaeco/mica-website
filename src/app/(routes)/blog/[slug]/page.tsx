'use client';

import { notFound } from 'next/navigation';
import { useBlogPosts } from '@/src/hooks/useBlogPosts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, User, Tag, TrafficCone } from 'lucide-react';

import MarkdownRenderer from '@/src/components/ui/Markdown';
import GoBack from '@/src/components/ui/GoBack';

type Props = {
  params: {
    slug: string;
  };
};

export default function Post({ params }: Props) {
  const { blogPosts } = useBlogPosts();
  const path = usePathname();

  const post = blogPosts.find((a) => a.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((_post) => _post.tag === post.tag && _post.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <GoBack currentPath={path} text={'Tornar a documentació'} />

      <div className="mb-2 flex flex-col rounded-lg bg-red-500 p-3 text-white shadow-lg">
        <div className="flex flex-row space-x-3">
          <TrafficCone size={50} />
          <h4> El següent contingut és una prova </h4>
        </div>
        <p className="mx-auto">
          {' '}
          Aquest document ha sigut generat utilitzant ia, pel que el contingut no es confiable.{' '}
        </p>
      </div>

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

      <div className="mt-8">
        <h5 className="mb-4 font-bold">Documents relacionats</h5>
        {relatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                href={`/documentation/${relatedPost.slug}`}
                className="block rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">{relatedPost.title}</h3>
                <p className="text-sm font-light">
                  {relatedPost.summary || 'No hi ha resum disponible.'}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p>No hi ha documents relacionats disponibles.</p>
        )}
      </div>
    </div>
  );
}
