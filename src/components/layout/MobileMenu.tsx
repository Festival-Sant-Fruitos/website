'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileMenu({ open, onClose, links }: MobileMenuProps) {
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
          {/* Top bar */}
          <div className="h-[8rem] flex items-center justify-between px-[2.4rem] border-b border-gray-200">
            <span className="text-[1.4rem] font-bold tracking-tight text-gray-800 uppercase">
              Festival Internacional
            </span>
            <button
              onClick={onClose}
              className="p-[0.4rem] text-gray-800"
              aria-label="Tancar menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 overflow-y-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block text-[2rem] font-bold text-gray-800 px-[2.4rem] py-[2rem] border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="p-[2.4rem] border-t border-gray-200">
            <Link
              href="/entrades"
              onClick={onClose}
              className="block w-full bg-teal text-white text-center text-[1.6rem] font-bold py-[1.4rem] hover:bg-gray-800 transition-colors"
            >
              Comprar Entrades
            </Link>
            <p className="text-gray-400 text-[1.2rem] text-center mt-[1.2rem]">
              XXXI Edició &middot; Juliol 2025
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
