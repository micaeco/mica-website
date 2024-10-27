'use client';

import { Link, usePathname } from '@/i18n/routing';
import { ArrowLeft } from 'lucide-react';

type Props = {
  text: string;
};

export default function GoBack({ text }: Props) {
  const pathname = usePathname();
  const pathWithoutLocale = pathname.substring(pathname.indexOf('/'));
  const href = pathWithoutLocale + '/..';

  return (
    <Link href={href} className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800">
      <ArrowLeft className="mr-2 size-4" />
      <span className="capitalize">{text}</span>
    </Link>
  );
}
