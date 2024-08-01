import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { IQuestion } from '@/src/types';

type Props = {
  question: IQuestion;
};

export default function Question({ question }: Props) {
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
      {isOpen && <p className="mt-2 text-sm text-gray-600">{question.answer}</p>}
    </div>
  );
};