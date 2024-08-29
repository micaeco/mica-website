import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  const components: Components = {
    h1: ({ node, ...props }) => <h4 className="mb-4 font-bold" {...props} />,
    h2: ({ node, ...props }) => <h5 className="mb-3 font-bold" {...props} />,
    h3: ({ node, ...props }) => <h6 className="mb-2 font-bold" {...props} />,
    h4: ({ node, ...props }) => <h6 className="mb-2 font-bold" {...props} />,
    h5: ({ node, ...props }) => <h6 className="mb-1 font-bold" {...props} />,
    h6: ({ node, ...props }) => <h6 className="mb-1 font-bold" {...props} />,
    p: ({ node, ...props }) => <p className="mb-4" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    ul: ({ node, ...props }) => <ul className="mb-4 list-inside list-disc" {...props} />,
    ol: ({ node, ...props }) => <ol className="mb-4 list-inside list-decimal" {...props} />,
    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
    a: ({ node, ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
  };

  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
