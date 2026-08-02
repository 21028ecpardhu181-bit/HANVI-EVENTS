import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ items, className = '' }) => {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  // Schema.org BreadcrumbList structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `https://hanvievents.com${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`py-3 px-1 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5 font-sans-ui text-xs text-[#6E5D4F]">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 text-[#B88A44]/60 shrink-0" aria-hidden="true" />
                )}

                {isLast || !item.href ? (
                  <span
                    className="font-medium text-[#34281F] truncate max-w-[200px] sm:max-w-[300px]"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#B88A44] transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-[#B88A44] rounded px-1"
                  >
                    {index === 0 && <Home className="w-3 h-3 text-[#B88A44] shrink-0" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
