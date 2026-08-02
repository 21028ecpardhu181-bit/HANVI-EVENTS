'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FCF9F5]"
        >
          <div className="flex flex-col items-center text-center p-6">
            <span className="font-script-accent text-3xl text-[#B88A44] mb-2">Hanvi</span>
            <h1 className="font-serif-editorial text-2xl tracking-widest text-[#34281F] uppercase font-light">
              Hanvi Events
            </h1>
            <div className="h-[1px] w-24 bg-[#B88A44]/40 my-4" />
            <p className="font-sans-ui text-[11px] tracking-widest text-[#6E5D4F] uppercase">
              Designing Unforgettable Celebrations
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
