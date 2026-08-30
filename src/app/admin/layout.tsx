import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Studio | Hanvi Events',
  description: 'Hanvi Events Content Management System Studio',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
