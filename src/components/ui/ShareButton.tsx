'use client';

import React, { useState } from 'react';
import { Share2, Check, Copy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ShareButtonProps {
  title: string;
  description: string;
  url?: string;
  className?: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  title,
  description,
  url,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleShare = async () => {
    const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const shareData = {
      title: `${title} | Hanvi Events`,
      text: description || `Check out ${title} at Hanvi Events Kakinada!`,
      url: shareUrl,
    };

    // Try Web Share API if supported and on mobile/secure browser
    if (typeof navigator !== 'undefined' && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        showToast('Shared successfully!');
        return;
      } catch (err: unknown) {
        // Ignore AbortError when user dismisses the share sheet
        if ((err as Error)?.name === 'AbortError') {
          return;
        }
      }
    }

    // Fallback: Copy URL to Clipboard
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        showToast('Link copied successfully.');
        setTimeout(() => setCopied(false), 3000);
      } catch {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(shareUrl);
      }
    } else {
      fallbackCopyTextToClipboard(shareUrl);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      showToast('Link copied successfully.');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showToast('Unable to copy link.');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        aria-label={`Share ${title}`}
        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F5ECDD]/80 hover:bg-[#B88A44] text-[#34281F] hover:text-[#FCF9F5] border border-[#E8DDCD] hover:border-[#B88A44] font-sans-ui text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B88A44] focus:ring-offset-2 ${className}`}
      >
        {copied ? (
          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
        ) : (
          <Share2 className="w-4 h-4 text-[#B88A44] group-hover:text-white transition-colors" />
        )}
        <span>{copied ? 'Link Copied' : 'Share Service'}</span>
      </button>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 px-3.5 py-1.5 rounded-xl bg-[#34281F] text-[#FCF9F5] font-sans-narrative text-xs shadow-lg border border-[#B88A44]/40 flex items-center gap-2 whitespace-nowrap"
            role="status"
            aria-live="polite"
          >
            <Copy className="w-3.5 h-3.5 text-[#B88A44]" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
