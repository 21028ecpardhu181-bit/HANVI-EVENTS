'use client';

import { useState, useEffect } from 'react';

/**
 * Hydration-safe hook for detecting mobile viewport.
 * Returns `isMobile: false` on the server to prevent hydration mismatches.
 * Only updates on the client after the component is mounted.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);

    mql.addEventListener('change', onChange);
    setIsMobile(mql.matches);

    return () => mql.removeEventListener('change', onChange);
  }, [breakpoint]);

  return { isMobile, mounted };
}
