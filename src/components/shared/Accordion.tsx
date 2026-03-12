'use client';

import { useState, ReactNode } from 'react';

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`border-t border-[var(--color-border)] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[var(--color-border)]">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 text-left group hover:bg-[var(--color-surface)]/50 transition-colors px-2.5 -mx-2.5"
              aria-expanded={isOpen}
            >
              <span className="text-base font-medium uppercase tracking-wide text-[var(--color-text-main)] group-hover:text-[var(--color-secondary)] transition-colors">
                {item.title}
              </span>
              <span className={`text-xl leading-none text-[var(--color-secondary)] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[1000px] opacity-100 pb-5' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="text-base text-[var(--color-text-muted)] leading-relaxed px-2.5 -mx-2.5">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
