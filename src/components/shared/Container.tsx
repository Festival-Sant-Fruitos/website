import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'main';
  size?: 'md' | 'lg';
}

export default function Container({ children, className, as: Tag = 'div', size = 'md' }: ContainerProps) {
  return (
    <Tag className={cn(
      'mx-auto px-6 md:px-10 w-full',
      size === 'lg' ? 'max-w-[1600px]' : 'max-w-[1260px]',
      className
    )}>
      {children}
    </Tag>
  );
}
