import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Components } from 'react-markdown/lib/ast-to-react';

interface DocumentComponentProps {
  article: {
    content?: string;
  };
}

type CustomComponentProps = {
  node: any;
  children: React.ReactNode;
  [key: string]: any;
};

const MarkdownRenderer: React.FC<DocumentComponentProps> = ({ article }) => {
  const components: Components = {
    h1: ({ node, children, ...props }: CustomComponentProps) => <h1 className="mb-4 text-2xl font-bold" {...props}>{children}</h1>,
    h2: ({ node, children, ...props }: CustomComponentProps) => <h2 className="mb-3 text-xl font-bold" {...props}>{children}</h2>,
    h3: ({ node, children, ...props }: CustomComponentProps) => <h3 className="mb-2 text-lg font-bold" {...props}>{children}</h3>,
    h4: ({ node, children, ...props }: CustomComponentProps) => <h4 className="mb-2 text-base font-bold" {...props}>{children}</h4>,
    h5: ({ node, children, ...props }: CustomComponentProps) => <h5 className="mb-1 text-sm font-bold" {...props}>{children}</h5>,
    h6: ({ node, children, ...props }: CustomComponentProps) => <h6 className="mb-1 text-xs font-bold" {...props}>{children}</h6>,
    p: ({ node, children, ...props }: CustomComponentProps) => <p className="mb-4" {...props}>{children}</p>,
    strong: ({ node, children, ...props }: CustomComponentProps) => <strong className="font-bold" {...props}>{children}</strong>,
    em: ({ node, children, ...props }: CustomComponentProps) => <em className="italic" {...props}>{children}</em>,
    ul: ({ node, children, ...props }: CustomComponentProps) => <ul className="mb-4 list-inside list-disc" {...props}>{children}</ul>,
    ol: ({ node, children, ...props }: CustomComponentProps) => <ol className="mb-4 list-inside list-decimal" {...props}>{children}</ol>,
    li: ({ node, children, ...props }: CustomComponentProps) => <li className="mb-1" {...props}>{children}</li>,
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