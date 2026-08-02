'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Check, Copy, Sparkles } from 'lucide-react';
import { ImageUploader } from '../ui/ImageUploader';
import { EditorialButton } from '../ui/EditorialButton';

interface MediaUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onImageUploaded?: (url: string) => void;
}

export const MediaUploadModal: React.FC<MediaUploadModalProps> = ({
  isOpen,
  onClose,
  onImageUploaded,
}) => {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSelected = (dataUrl: string) => {
    setUploadedUrl(dataUrl);
    if (onImageUploaded) {
      onImageUploaded(dataUrl);
    }
  };

  const handleCopy = () => {
    if (uploadedUrl) {
      navigator.clipboard.writeText(uploadedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#34281F]/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#FCF9F5] border border-[#E8DDCD] rounded-3xl p-6 md:p-8 shadow-2xl z-10 my-8"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#6E5D4F] hover:bg-[#F5ECDD]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="font-script-accent text-3xl text-[#B88A44]">Custom Media Studio</span>
              <h3 className="font-serif-editorial text-2xl text-[#34281F]">Upload Your Event Photos</h3>
              <p className="font-sans-narrative text-xs text-[#6E5D4F] mt-1">
                Drag and drop any image from your computer to replace any photo on Hanvi Events.
              </p>
            </div>

            <ImageUploader onImageSelected={handleSelected} />

            {uploadedUrl && (
              <div className="mt-6 pt-4 border-t border-[#E8DDCD] flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2 text-xs text-[#59624C]">
                  <Check className="w-4 h-4" />
                  <span>Image uploaded and ready for live preview!</span>
                </div>

                <div className="flex gap-2 w-full">
                  <EditorialButton variant="secondary" size="sm" onClick={handleCopy} className="w-full">
                    {copied ? 'Data URL Copied!' : 'Copy Image Data Link'}
                  </EditorialButton>
                  <EditorialButton variant="primary" size="sm" onClick={onClose} className="w-full">
                    Done
                  </EditorialButton>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
