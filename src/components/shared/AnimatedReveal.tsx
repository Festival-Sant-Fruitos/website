'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedReveal({
  children,
  className,
  delay = 0,
}: AnimatedRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
