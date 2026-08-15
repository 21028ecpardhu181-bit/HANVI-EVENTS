import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Manrope, Allura } from 'next/font/google';
import '@/styles/globals.css';
import { LayoutContent } from '@/components/layout/LayoutContent';
import { PaperTexture } from '@/components/ui/PaperTexture';
import { getLocalBusinessSchema, getWebsiteSchema, getFounderPersonSchema, SITE_URL } from '@/lib/seo';

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Hanvi Events — Best Event Management in Kakinada & Andhra Pradesh | Ch. Kala Prasad',
    template: '%s | Hanvi Events Kakinada',
  },
  description:
    'Hanvi Events is the #1 luxury wedding planner & event management company in Kakinada & East Godavari, managed by Ch. Kala Prasad (Event Director). Specialist in marriage mandap decoration, birthday parties, cradle ceremonies, bridal makeup, catering & corporate galas in Andhra Pradesh.',
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    'best event management near me',
    'event management in Kakinada',
    'best event planners in Kakinada',
    'best event management company in East Godavari',
    'wedding planner Kakinada',
    'marriage event organizers near me',
    'mandap decoration in Kakinada',
    'Vedic mandapam decorators East Godavari',
    'Pellikuthuru decoration in Kakinada',
    'Barasala cradle ceremony event planners',
    'half saree function planners Andhra Pradesh',
    'birthday party organizers in Kakinada',
    'bridal makeup artist in Kakinada',
    'wedding catering services East Godavari',
    'event planners in Rajahmundry',
    'Ch Kala Prasad Event Director Kakinada',
    'Hanvi Events Jagannaickpur Netaji Park',
    'luxury wedding decorators Andhra Pradesh',
    'best event managers near me',
    'stage decoration near me Kakinada',
  ],
  authors: [{ name: 'Ch. Kala Prasad • Hanvi Events Studio' }],
  creator: 'Ch. Kala Prasad',
  publisher: 'Hanvi Events Studio',
  openGraph: {
    title: 'Hanvi Events — Best Event Management & Wedding Planning in Kakinada | Ch. Kala Prasad',
    description: 'Bespoke luxury wedding planning, mandap architecture, birthday celebrations & corporate galas managed by Event Director Ch. Kala Prasad in Kakinada & Andhra Pradesh.',
    url: SITE_URL,
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
    title: 'Hanvi Events — Best Event Management & Luxury Weddings in Kakinada',
    description: 'Bespoke luxury wedding planning, mandap architecture & celebrations managed by Ch. Kala Prasad.',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', type: 'image/png', sizes: '48x48' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  verification: {
    google: 'googlec40ccbb49f7957ba',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getLocalBusinessSchema();
  const websiteJsonLd = getWebsiteSchema();
  const founderJsonLd = getFounderPersonSchema();

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} ${manrope.variable} ${allura.variable}`}
    >
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
        />
      </head>
      <body className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col font-sans-narrative antialiased pb-[72px] md:pb-0">
        <PaperTexture opacity={0.3} />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
