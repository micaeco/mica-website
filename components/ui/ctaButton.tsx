import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  className?: string;
  text: string;
  href: string;
};

export default function CtaButton({ className, text, href }: Props) {
  return (
    <Link
      className={`${className} group inline-flex items-center rounded-lg bg-accent px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-accent/90 hover:shadow-lg`}
      href={href}
    >
      {text}
      <ArrowRight className="ml-2 size-5 transition duration-300 group-hover:translate-x-1" />
    </Link>
  );
}