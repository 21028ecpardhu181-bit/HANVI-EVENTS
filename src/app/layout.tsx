import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Manrope, Allura } from 'next/font/google';
import '@/styles/globals.css';
import { LayoutContent } from '@/components/layout/LayoutContent';
import { PaperTexture } from '@/components/ui/PaperTexture';
import { getLocalBusinessSchema, getWebsiteSchema, SITE_URL } from '@/lib/seo';

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
    default: 'Hanvi Events — Luxury Event Planning & Wedding Design | Kakinada',
    template: '%s | Hanvi Events Kakinada',
  },
  description:
    'Hanvi Events (Est. 2018) is Kakinada’s premier luxury wedding planner & event management company managed by Ch. Kala Prasad. We design mandaps, mehendi, birthdays & corporate galas in Andhra Pradesh.',
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    'best event planners near me',
    'event planners in Kakinada',
    'event planners in Rajahmundry',
    'marriage event planning Kakinada',
    'wedding planner Kakinada',
    'birthday events planner near me',
    'birthday party organizers Kakinada',
    'mandap decoration Kakinada',
    'event management company East Godavari',
    'event organizers Andhra Pradesh',
    'Hanvi Events Kakinada',
    'Hanvi Events Jagannaickpur Netaji Park',
    'Telugu wedding decorators Andhra Pradesh',
    'half saree function decor Kakinada',
    'sangeet mehendi stage decor Rajahmundry',
    'catering services Kakinada',
  ],
  authors: [{ name: 'Hanvi Events Studio' }],
  creator: 'Hanvi Events Studio',
  publisher: 'Hanvi Events Studio',
  openGraph: {
    title: 'Hanvi Events — Luxury Event Planning & Design',
    description: 'Bespoke luxury wedding planning, mandap architecture, birthday celebrations & corporate galas in Kakinada & Andhra Pradesh.',
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
    title: 'Hanvi Events — Luxury Event Planning & Design',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col font-sans-narrative antialiased pb-[72px] md:pb-0">
        <PaperTexture opacity={0.3} />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
