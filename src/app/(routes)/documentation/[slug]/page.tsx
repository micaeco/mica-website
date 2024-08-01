'use client';

import { notFound } from 'next/navigation'
import { useDocuments } from '@/src/hooks/useDocuments'
import Link from 'next/link'
import MarkdownRenderer from '@/src/components/ui/markdownRenderer';
import { ArrowLeft, Clock, User, Tag, TrafficCone } from 'lucide-react'

type Props = {
  params: {
    slug: string
  }
}

export default function Article({ params }: Props) {  
  const { documents } = useDocuments();

  const article = documents.find(a => a.slug === params.slug);

  if (!article) {
    notFound()
  }

  const relatedDocuments = documents
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link 
        href="/documentation" 
        className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft className="mr-2 size-4" />
        Tornar a Documentació
      </Link>

      <div className="mb-2 flex flex-col rounded-lg bg-red-500 p-3 text-white shadow-lg">
        <div className="flex flex-row space-x-3">
          <TrafficCone size={50} />
          <h4> El següent contingut és una prova </h4>
        </div>
        <p className="mx-auto"> Aquest document ha sigut generat utilitzant ia, pel que el contingut no es confiable. </p>
      </div>
      
      <article className="overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="p-6">
          <h1 className="mb-4 text-3xl font-bold">{article.title}</h1>
          
          <div className="mb-4 flex items-center text-sm text-gray-600">
            <Clock className="mr-1 size-4" />
            <span className="mr-4">{article.date || 'Data desconeguda'}</span>
            <User className="mr-1 size-4" />
            <span className="mr-4">{article.author || 'Autor desconegut'}</span>
            <Tag className="mr-1 size-4" />
            <span>{article.category || 'Categoria desconeguda'}</span>
          </div>
          
          <MarkdownRenderer article={article} />
        </div>
      </article>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Documents relacionats</h2>
        {relatedDocuments.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {relatedDocuments.map(relatedArticle => (
              <Link 
                key={relatedArticle.slug} 
                href={`/documentation/${relatedArticle.slug}`}
                className="block rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">{relatedArticle.title}</h3>
                <p className="text-sm text-gray-600">{relatedArticle.summary || 'No hi ha resum disponible.'}</p>
              </Link>
            ))}
          </div>
        ) : (
          <p>No hi ha documents relacionats disponibles.</p>
        )}
      </div>
    </div>
  )
}