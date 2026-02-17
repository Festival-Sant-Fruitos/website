import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'dark' | 'outline' | 'white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-dark)] shadow-sm hover:shadow-md',
  dark: 'bg-[var(--color-primary)] text-white hover:bg-black',
  outline: 'border border-current text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  white: 'bg-white text-[var(--color-primary)] hover:bg-gray-100 shadow-sm',
  ghost: 'text-[var(--color-primary)] hover:text-[var(--color-secondary)] hover:bg-gray-50',
};

const sizes = {
  sm: 'px-[1.6rem] py-[0.8rem] text-[1.4rem]',
  md: 'px-[2.4rem] py-[1.2rem] text-[1.5rem]',
  lg: 'px-[3.2rem] py-[1.6rem] text-[1.6rem]',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  external,
  className,
  onClick,
  type,
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2',
    variants[variant],
    sizes[size],
    className
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
