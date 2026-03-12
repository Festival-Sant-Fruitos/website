'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ArtistBioProps {
  name: string;
  role: string;
  bio: string;
}

export default function ArtistBio({ name, role, bio }: ArtistBioProps) {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <div>
          <span className="text-base font-bold text-gray-800 group-hover:text-teal transition-colors">
            {name}
          </span>
          <span className="text-sm text-gray-400 ml-2 capitalize">
            {role}
          </span>
        </div>
        <motion.svg
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: reduced ? 0 : 0.3 }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-400 flex-shrink-0"
        >
          <path d="M6 9l6 6 6-6" />
        </motion.svg>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-600 leading-[1.6] pb-4">
              {bio}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
