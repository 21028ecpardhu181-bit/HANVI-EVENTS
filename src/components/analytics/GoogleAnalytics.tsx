'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * GA4 is opt-in: without NEXT_PUBLIC_GA_MEASUREMENT_ID no third-party request
 * is made. Telephone and WhatsApp links are tracked through a single listener.
 */
export function GoogleAnalytics() {
  useEffect(() => {
    if (!measurementId) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      const isPhone = href.startsWith('tel:');
      const isWhatsApp = href.includes('wa.me') || href.includes('whatsapp.com');
      if (!isPhone && !isWhatsApp) return;

      window.gtag?.('event', isPhone ? 'phone_click' : 'whatsapp_click', {
        cta_location: link.dataset.cta ?? 'sitewide_link',
        link_url: href,
      });
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
}
