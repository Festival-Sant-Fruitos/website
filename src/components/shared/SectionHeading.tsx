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
    <div className={cn('mb-10 md:mb-14', className)}>
      <h2
        className={cn(
          'text-2xl md:text-[3rem] lg:text-[4rem] font-serif font-light leading-[1.05] tracking-tight',
          light ? 'text-white' : 'text-[var(--color-primary)]'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg md:text-xl mt-4 max-w-[600px] leading-[1.5] font-light',
            light ? 'text-white/70' : 'text-[var(--color-text-muted)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
