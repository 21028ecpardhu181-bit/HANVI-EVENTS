import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { journalArticles } from '@/lib/data/journal';
import { getSanityJournalArticles } from '@/lib/sanity/fetch';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ImageWithSkeleton } from '@/components/ui/ImageWithSkeleton';
import { EditorialBadge } from '@/components/ui/EditorialBadge';

export default async function JournalPage() {
  const sanityArticles = await getSanityJournalArticles();
  const articles = sanityArticles && sanityArticles.length > 0 ? sanityArticles : journalArticles;

  return (
    <div className="pt-28 pb-24 bg-[#FCF9F5]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <SectionHeader
          scriptEyebrow="Editorial Perspectives & Insights"
          title="The Hanvi Journal"
          description="Read our thoughts on sacred mandap geometry, floral selection, and spatial lighting design."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {articles.map((article) => (
            <div key={article.id} className="group bg-[#F5ECDD]/40 border border-[#E8DDCD] rounded-3xl overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-500 flex flex-col">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <ImageWithSkeleton src={article.heroImage} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-10">
                  <EditorialBadge variant="gold">{article.category}</EditorialBadge>
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-3 text-xs text-[#6E5D4F] font-sans-ui uppercase tracking-wider mb-2">
                  <span>{article.publishedDate}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="font-serif-editorial text-2xl md:text-3xl text-[#34281F] font-normal group-hover:text-[#B88A44] transition-colors">
                  {article.title}
                </h2>
                <p className="font-sans-narrative text-xs md:text-sm text-[#6E5D4F] mt-2 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <Link href={`/journal/${article.slug}`} className="mt-auto pt-4 border-t border-[#E8DDCD] flex items-center justify-between font-sans-ui text-xs uppercase font-semibold text-[#34281F] group-hover:text-[#B88A44]">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
