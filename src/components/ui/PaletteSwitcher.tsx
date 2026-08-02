'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, X, Sparkles } from 'lucide-react';
import { colorPalettes, applyPalette } from '@/lib/theme';
import { EditorialBadge } from './EditorialBadge';

export const PaletteSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePaletteId, setActivePaletteId] = useState('peach-gold');

  useEffect(() => {
    const saved = localStorage.getItem('hanvi_color_palette');
    if (saved) {
      setActivePaletteId(saved);
      applyPalette(saved);
    }
  }, []);

  const handleSelectPalette = (id: string) => {
    setActivePaletteId(id);
    applyPalette(id);
  };

  return (
    <>
      {/* Floating Small Button — hidden on mobile, palette is in drawer instead */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 p-3 bg-[#34281F] text-[#FCF9F5] rounded-full shadow-[0_12px_32px_-4px_rgba(52,40,31,0.3)] border border-[#B88A44]/50 cursor-pointer hidden md:flex items-center justify-center group"
        title="Change Decor Color Palette"
      >
        <Palette className="w-5 h-5 text-[#B88A44] group-hover:rotate-12 transition-transform" />
      </motion.button>

      {/* Palette Selection Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#34281F]/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 shadow-2xl z-10 my-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-[#6E5D4F] hover:bg-[#F5ECDD]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <EditorialBadge variant="gold">Decor Palette Selector</EditorialBadge>
                <h3 className="font-serif-editorial text-2xl text-[#34281F] font-normal mt-1">
                  Choose Wedding Theme Palette
                </h3>
                <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                  Select a color story to customize the entire website's visual atmosphere.
                </p>
              </div>

              <div className="space-y-3">
                {colorPalettes.map((palette) => {
                  const isSelected = activePaletteId === palette.id;
                  return (
                    <button
                      key={palette.id}
                      onClick={() => handleSelectPalette(palette.id)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-[#B88A44] bg-[#F5ECDD] shadow-sm'
                          : 'border-[#E8DDCD] bg-[#FCF9F5] hover:bg-[#F5ECDD]/40'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-serif-editorial text-lg text-[#34281F] font-medium">
                            {palette.name}
                          </span>
                          {isSelected && (
                            <span className="p-0.5 rounded-full bg-[#B88A44] text-[#FCF9F5]">
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <span className="font-sans-narrative text-[11px] text-[#6E5D4F] block">
                          {palette.subtitle}
                        </span>

                        {/* Swatch Color Circles */}
                        <div className="flex items-center space-x-1.5 pt-1">
                          {palette.swatches.map((hex, idx) => (
                            <span
                              key={idx}
                              style={{ backgroundColor: hex }}
                              className="w-4 h-4 rounded-full border border-black/10 shadow-xs"
                            />
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DDCD] text-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 bg-[#34281F] text-[#FCF9F5] rounded-full font-sans-ui text-xs uppercase tracking-wider font-semibold hover:bg-[#B88A44] transition-colors cursor-pointer"
                >
                  Apply & Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
