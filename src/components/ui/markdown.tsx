import React from "react";
import ReactMarkdown, { Components } from "react-markdown";
import Image from "next/image";

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  const components: Components = {
    h1: ({ ...props }) => <h4 className="mb-4 font-bold" {...props} />,
    h2: ({ ...props }) => <h5 className="mb-3 font-bold" {...props} />,
    h3: ({ ...props }) => <h6 className="mb-2 font-bold" {...props} />,
    h4: ({ ...props }) => <h6 className="mb-2 font-bold" {...props} />,
    h5: ({ ...props }) => <h6 className="mb-1 font-bold" {...props} />,
    h6: ({ ...props }) => <h6 className="mb-1 font-bold" {...props} />,
    p: ({ ...props }) => <p className="mb-4" {...props} />,
    strong: ({ ...props }) => <strong className="font-bold" {...props} />,
    em: ({ ...props }) => <em className="italic" {...props} />,
    ul: ({ ...props }) => <ul className="mb-4 list-inside list-disc" {...props} />,
    ol: ({ ...props }) => <ol className="mb-4 list-inside list-decimal" {...props} />,
    li: ({ ...props }) => <li className="mb-1" {...props} />,
    a: ({ ...props }) => <a className="text-blue-500 hover:underline" {...props} />,
    img: ({ src, alt }) => (
      <div className="relative aspect-video w-full overflow-hidden rounded-md">
        <Image
          src={src || ""}
          alt={alt || ""}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    ),
  };

  return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
