'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  edition: string;
  year: number;
}

export default function MobileMenu({ open, onClose, links, edition, year }: MobileMenuProps) {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={reduced ? { opacity: 0 } : { x: '-100%' }}
          animate={reduced ? { opacity: 1 } : { x: 0 }}
          exit={reduced ? { opacity: 0 } : { x: '-100%' }}
          transition={{ type: 'tween', duration: reduced ? 0.15 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[200] bg-white flex flex-col"
        >
          <div className="h-20 flex items-center justify-between px-6 border-b border-gray-200">
            <span className="text-sm font-bold tracking-tight text-gray-800 uppercase">
              Festival Internacional
            </span>
            <button
              onClick={onClose}
              className="p-1 text-gray-800"
              aria-label="Tancar menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block text-xl font-medium text-gray-800 px-6 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-gray-200">
            <Link
              href="/entrades"
              onClick={onClose}
              className="block w-full bg-[var(--color-secondary)] text-white text-center text-base font-medium py-4 hover:bg-[var(--color-secondary-dark)] transition-colors"
            >
              Comprar Entrades
            </Link>
            <p className="text-gray-400 text-xs text-center mt-3">
              {edition} Edició &middot; Juliol {year}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
