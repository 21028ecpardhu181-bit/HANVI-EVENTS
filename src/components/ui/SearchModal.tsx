'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { getAllMergedServices } from '@/lib/data/servicesStore';
import { ServiceCategory } from '@/lib/types';
import { EditorialBadge } from './EditorialBadge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [services, setServices] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    setServices(getAllMergedServices());
  }, [isOpen]);

  // Keyboard shortcut listener (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredServices = query.trim()
    ? services.filter(
        (s) =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase()) ||
          s.tagline.toLowerCase().includes(query.toLowerCase())
      )
    : services.slice(0, 5);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-12 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#34281F]/70 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="relative w-full max-w-2xl bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-5 sm:p-7 shadow-2xl z-10 space-y-4"
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-[#B88A44]" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, mandap decor, catering, makeup, traditions..."
                className="w-full pl-12 pr-10 py-3.5 bg-[#F5ECDD]/60 border border-[#E8DDCD] rounded-2xl font-sans-narrative text-sm sm:text-base text-[#34281F] focus:outline-none focus:border-[#B88A44] placeholder:text-[#6E5D4F]/60"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 p-1 rounded-full text-[#6E5D4F] hover:bg-[#E8DDCD]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Section */}
            <div className="max-h-[60vh] overflow-y-auto space-y-4 pr-1">
              
              {/* Service Results */}
              <div>
                <span className="font-sans-ui text-[11px] uppercase tracking-wider text-[#B88A44] font-semibold block mb-2 px-1">
                  {query.trim() ? 'Matching Services' : 'Featured Services'}
                </span>

                {filteredServices.length === 0 ? (
                  <p className="font-sans-narrative text-xs text-[#6E5D4F] p-3 text-center">
                    No services found matching "{query}". Try searching for 'mandap', 'catering', or 'makeup'.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {filteredServices.map((item) => (
                      <Link
                        key={item.id}
                        href={`/services/${item.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F5ECDD]/30 border border-[#E8DDCD] hover:border-[#B88A44] hover:bg-[#F5ECDD] transition-all group"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-serif-editorial text-base text-[#34281F] font-medium group-hover:text-[#B88A44] transition-colors">
                              {item.title}
                            </h4>
                          </div>
                          <p className="font-sans-narrative text-xs text-[#6E5D4F] line-clamp-1 mt-0.5">
                            {item.tagline} • {item.shortDescription || item.description}
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#B88A44] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-[#E8DDCD] flex items-center justify-between font-sans-ui text-[10px] text-[#6E5D4F]">
              <span>Press <kbd className="px-1.5 py-0.5 bg-[#E8DDCD] rounded text-[#34281F] font-mono">ESC</kbd> to close</span>
              <button onClick={onClose} className="hover:text-[#34281F] underline">Close Search</button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
