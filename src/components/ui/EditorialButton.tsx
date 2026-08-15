'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonHoverVariants } from '@/animations/variants';

interface EditorialButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asLink?: boolean;
}

export const EditorialButton: React.FC<EditorialButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-sans-ui text-xs tracking-wider uppercase font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#B88A44]/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer min-h-[44px] md:min-h-0';

  const sizeStyles = {
    sm: 'px-4 py-2.5 gap-2 text-[11px]',
    md: 'px-5 py-3 gap-2 text-[11px] md:px-6 md:py-3.5 md:gap-2.5 md:text-xs',
    lg: 'px-6 py-3 gap-2.5 text-[11px] md:px-8 md:py-4 md:gap-3 md:text-xs',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#B88A44] via-[#C99A4E] to-[#9E7432] text-white shadow-[0_4px_20px_rgba(184,138,68,0.35)] hover:shadow-[0_8px_30px_rgba(184,138,68,0.55)] hover:brightness-110 border border-[#E6C687]/40 active:scale-98',
    gold:
      'bg-gradient-to-b from-[#FFFDDD] via-[#B88A44] to-[#8F6A27] text-white shadow-[0_4px_16px_rgba(184,138,68,0.3)] hover:brightness-110 border border-[#EAD98F]',
    secondary:
      'bg-[#F5ECDD] text-[#34281F] hover:bg-[#E8DDCD] border border-[#E8DDCD] shadow-xs',
    outline:
      'bg-transparent text-[#34281F] border border-[#B88A44] hover:bg-[#B88A44] hover:text-white',
    ghost:
      'bg-transparent text-[#34281F] hover:bg-[#F5ECDD]/60 border border-transparent',
    glass:
      'bg-white/10 backdrop-blur-md text-[#34281F] border border-[#B88A44]/40 hover:bg-[#B88A44]/20',
  };

  return (
    <motion.button
      variants={buttonHoverVariants}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="w-4 h-4 shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="w-4 h-4 shrink-0">{icon}</span>}
    </motion.button>
  );
};
