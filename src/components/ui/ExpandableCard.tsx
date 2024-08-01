import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface ExpandableCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  description,
  imageSrc,
  isExpanded,
  onToggle,
}) => {
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [description, isExpanded]);

  return (
    <div className={`overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out ${isExpanded ? 'relative z-10' : ''}`}>
      <div className="p-6">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={130}
            height={130}
            className="mb-4"
          />
        )}
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <div
          ref={contentRef}
          style={{
            maxHeight: isExpanded ? `${contentHeight}px` : '0',
            opacity: isExpanded ? 1 : 0,
            transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out'
          }}
          className="overflow-hidden"
        >
          <p className="text-sm text-gray-500 ">{description}</p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="w-full bg-tertiary p-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-tertiary-700"
      >
        {isExpanded ? 'Mostra menys' : 'Mostra més'}
      </button>
    </div>
  );
};

export default ExpandableCard;