import { PortableTextComponents } from '@portabletext/react';
import { urlFor } from './config';
import Link from 'next/link';
import Image from 'next/image';

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="font-bold">{children}</h6>,
    normal: ({ children }) => <p className="mb-8">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-gray-200 pl-4 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        className="text-blue-600 hover:underline"
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-8 list-disc space-y-4 pl-4">{children}</ul>,
    number: ({ children }) => <ol className="mb-8 list-decimal space-y-4 pl-4">{children}</ol>,
  },
  types: {
    image: ({ value }) => (
      <div className="my-8 flex aspect-video justify-center overflow-hidden">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          width={3000}
          height={3000}
          className="rounded-lg"
        />
      </div>
    ),
  },
};
