import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-[4rem] md:mb-[6rem]', className)}>
      <h2
        className={cn(
          'text-[3.2rem] md:text-[4.8rem] lg:text-[6.4rem] font-serif font-medium leading-[1.05] tracking-tight',
          light ? 'text-white' : 'text-[var(--color-primary)]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-[1.8rem] md:text-[2rem] mt-[1.6rem] max-w-[60rem] leading-[1.5] font-light',
            light ? 'text-white/70' : 'text-[var(--color-text-muted)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
