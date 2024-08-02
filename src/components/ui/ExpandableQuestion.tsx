import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { IQuestion } from '@/src/types';

type Props = {
  question: IQuestion;
};

export default function ExpandableQuestion({ question }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question.title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="mt-2 text-sm text-gray-600">{question.answer}</p>
        </div>
      </div>
    </div>
  );
}