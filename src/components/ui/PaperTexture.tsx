import React from 'react';

export const PaperTexture: React.FC<{ opacity?: number }> = ({ opacity = 0.4 }) => {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 select-none paper-texture"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
