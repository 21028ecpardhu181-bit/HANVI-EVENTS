'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { journalArticles } from '@/lib/data/journal';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';

export default function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = journalArticles.find((a) => a.slug === slug) || journalArticles[0];

  if (!article) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <Link href="/journal" className="inline-flex items-center space-x-2 text-xs font-sans-ui uppercase tracking-wider text-[#B88A44] mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal Archive</span>
        </Link>

        <EditorialBadge variant="gold">{article.category}</EditorialBadge>
        
        <h1 className="font-serif-editorial text-4xl md:text-5xl text-[#34281F] font-normal leading-tight mt-3 mb-4">
          {article.title}
        </h1>

        <div className="flex items-center space-x-4 text-xs font-sans-ui text-[#6E5D4F] uppercase tracking-wider mb-8 pb-4 border-b border-[#E8DDCD]">
          <span>By {article.author.name}</span>
          <span>•</span>
          <span>{article.publishedDate}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>

        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden mb-10 shadow-md">
          <ImageWithSkeleton src={article.heroImage} alt={article.title} fill className="object-cover" />
        </div>

        <div className="space-y-6">
          {article.content.map((p, idx) => (
            <p key={idx} className="font-sans-narrative text-base md:text-lg text-[#6E5D4F] leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
