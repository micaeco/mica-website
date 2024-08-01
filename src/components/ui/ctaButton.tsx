import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'accent' | 'transparent';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  href: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

export default function CtaButton({ 
  className = '', 
  text, 
  href, 
  variant = 'accent', 
  showArrow = true,
  ...props 
}: Props) {
  const baseClasses = "inline-flex items-center rounded-lg px-6 py-3 text-lg font-semibold transition-all";
  const variantClasses = {
    accent: "bg-accent text-white hover:bg-accent/90",
    transparent: "bg-transparent border border-primary text-primary hover:bg-primary/10"
  };
  
  return (
    <Link href={href} passHref>
      <button
        className={`${baseClasses} ${variantClasses[variant]} ${className} group m-2`}
        {...props}
      >
        {text}
        {showArrow && (
          <ArrowRight className="ml-2 size-5 transition duration-300 group-hover:translate-x-1" />
        )}
      </button>
    </Link>
  );
}