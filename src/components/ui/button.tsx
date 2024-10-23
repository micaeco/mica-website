import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant?: 'accent' | 'transparent';
  showArrow?: boolean;
};

export default function Button({
  children,
  className = '',
  variant = 'accent',
  showArrow = true,
  ...props
}: Props) {
  const baseClasses =
    'inline-flex items-center rounded-lg px-6 py-3 text-lg font-semibold transition-all';
  const variantClasses = {
    accent: 'bg-accent text-white hover:bg-accent/90 border border-accent',
    transparent: 'bg-transparent border border-white text-white hover:bg-primary/40',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className} group`} {...props}>
      {children}
      {showArrow && (
        <ArrowRight className="ml-2 size-5 transition duration-300 group-hover:translate-x-1" />
      )}
    </button>
  );
}
