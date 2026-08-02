import React from 'react';
import { cn } from '@/lib/utils';

interface EditorialBadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'olive' | 'rose' | 'muted';
  className?: string;
}

export const EditorialBadge: React.FC<EditorialBadgeProps> = ({
  children,
  variant = 'gold',
  className,
}) => {
  const variantStyles = {
    gold: 'border-[#B88A44]/30 bg-[#F5ECDD]/60 text-[#B88A44]',
    olive: 'border-[#59624C]/30 bg-[#59624C]/10 text-[#59624C]',
    rose: 'border-[#C68F87]/30 bg-[#C68F87]/10 text-[#C68F87]',
    muted: 'border-[#E8DDCD] bg-[#FCF9F5] text-[#6E5D4F]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-lg border font-sans-ui text-[10px] uppercase tracking-widest font-semibold',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
