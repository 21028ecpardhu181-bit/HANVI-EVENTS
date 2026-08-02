import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Manrope, Allura } from 'next/font/google';
import '@/styles/globals.css';
import { LayoutContent } from '@/components/layout/LayoutContent';
import { PaperTexture } from '@/components/ui/PaperTexture';
import { getLocalBusinessSchema } from '@/lib/seo';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const allura = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hanvievents.com'),
  title: {
    default: 'Hanvi Events — Luxury Event Planning & Wedding Design | Kakinada',
    template: '%s | Hanvi Events Kakinada',
  },
  description:
    'Hanvi Events (Est. 2015) is Kakinada’s premier luxury wedding planner & event management company located near Netaji Park, Jagannaickpur. We design mandaps, mehendi, birthdays & corporate galas.',
  keywords: [
    'Hanvi Events Kakinada',
    'Hanvi Events Jagannaickpur',
    'Wedding Planner Kakinada',
    'Mandap Decoration Kakinada',
    'Birthday Planner Kakinada',
    'Event Organizers Kakinada Netaji Park',
    'Hanvi Events Phone Number 9700929650',
    'Telugu Wedding Planner Andhra Pradesh',
  ],
  authors: [{ name: 'Hanvi Events Studio' }],
  creator: 'Hanvi Events Studio',
  publisher: 'Hanvi Events Studio',
  openGraph: {
    title: 'Hanvi Events — Luxury Event Planning & Mandap Design | Kakinada',
    description: 'Est. 2015 in Kakinada. Bespoke luxury wedding planning, mandap architecture, birthday celebrations & corporate galas.',
    url: 'https://hanvievents.com',
    siteName: 'Hanvi Events Kakinada',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Hanvi Events Kakinada Sacred Mandap Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanvi Events — Luxury Event Planning & Wedding Design | Kakinada',
    description: 'Est. 2015 in Kakinada. Bespoke luxury wedding planning, mandap architecture & celebrations.',
    images: ['https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} ${manrope.variable} ${allura.variable}`}
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col font-sans-narrative antialiased pb-[72px] md:pb-0">
        <PaperTexture opacity={0.3} />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
