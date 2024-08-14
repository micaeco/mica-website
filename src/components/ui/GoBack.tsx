import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type Props = {
  currentPath: string;
  desiredPath?: string;
  text: string;
};

export default function GoBack({ currentPath, desiredPath = '/..', text }: Props) {
  return (
    <Link
      href={currentPath + desiredPath}
      className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800"
    >
      <ArrowLeft className="mr-2 size-4" />
      {text}
    </Link>
  );
}
