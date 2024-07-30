import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  isExpanded: boolean;
  onToggle: () => void;
  noneExpanded: boolean;
}

export default function ExpandableCard({ title, description, imageSrc , isExpanded, onToggle, noneExpanded }: Props) {
  return (
    <div className={`relative rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out
      ${isExpanded ? 'z-10' : 'z-0'} ${noneExpanded ? '' : isExpanded ? '' : 'opacity-70'}`}>
      <div className="p-6 pb-16">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={400} 
          height={400} 
          className="mb-4 size-20 rounded-md object-cover"
        />
        <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      </div>
      <button
        onClick={onToggle}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-accent p-2 text-primary-300 transition-colors duration-200 hover:text-primary"
        aria-label={isExpanded ? "Collapse" : "Expand"}
      >
        {isExpanded ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
      </button>
      <div
        className={`absolute inset-x-0 rounded-b-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out
          ${isExpanded ? 'visible opacity-100' : 'invisible opacity-0'}`}
        style={{ top: '100%' }}
      >
        <p className="text-primary">{description}</p>
      </div>
    </div>
  )
}