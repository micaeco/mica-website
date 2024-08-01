import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown';

interface DocumentComponentProps {
  article: {
    content?: string;
  };
}

const MarkdownRenderer: React.FC<DocumentComponentProps> = ({ article }) => {
  const components: Components = {
    h1: ({ node, ...props }) => <h1 className="mb-4 text-2xl font-bold" {...props} />,
    h2: ({ node, ...props }) => <h2 className="mb-3 text-xl font-bold" {...props} />,
    h3: ({ node, ...props }) => <h3 className="mb-2 text-lg font-bold" {...props} />,
    h4: ({ node, ...props }) => <h4 className="mb-2 text-base font-bold" {...props} />,
    h5: ({ node, ...props }) => <h5 className="mb-1 text-sm font-bold" {...props} />,
    h6: ({ node, ...props }) => <h6 className="mb-1 text-xs font-bold" {...props} />,
    p: ({ node, ...props }) => <p className="mb-4" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
    em: ({ node, ...props }) => <em className="italic" {...props} />,
    ul: ({ node, ...props }) => <ul className="mb-4 list-inside list-disc" {...props} />,
    ol: ({ node, ...props }) => <ol className="mb-4 list-inside list-decimal" {...props} />,
    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
  };

  return (
    <div className="prose max-w-none px-1">
      {article.content ? (
        <ReactMarkdown components={components}>{article.content}</ReactMarkdown>
      ) : (
        <p>No hi ha contingut disponible per a aquest article.</p>
      )}
    </div>
  );
};

export default MarkdownRenderer;