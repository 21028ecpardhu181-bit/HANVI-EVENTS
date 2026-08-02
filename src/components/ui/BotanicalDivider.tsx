import React from 'react';

export const BotanicalDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 text-[#B88A44]/60 ${className}`}>
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#B88A44]/40" />
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 opacity-70"
      >
        <path d="M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z" />
        <path d="M12 6C9 8 5 9 3 9" />
        <path d="M12 6C15 8 19 9 21 9" />
        <path d="M12 18C9 16 5 15 3 15" />
        <path d="M12 18C15 16 19 15 21 15" />
      </svg>
      <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#B88A44]/40" />
    </div>
  );
};
