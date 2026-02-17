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
      'mx-auto px-[2.4rem] md:px-[4rem] w-full',
      size === 'lg' ? 'max-w-[160rem]' : 'max-w-[126rem]',
      className
    )}>
      {children}
    </Tag>
  );
}
