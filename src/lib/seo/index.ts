/**
 * SEO module barrel export.
 *
 * Import from '@/lib/seo/index' or '@/lib/seo' to access
 * the keyword universe and page blueprints.
 */

export {
  type SearchIntent,
  type KeywordPriority,
  type KeywordCluster,
  type KeywordRole,
  type SEOKeyword,
  KEYWORD_UNIVERSE,
  getKeywordsForPage,
  getPrimaryKeyword,
  getClusterKeywords,
  getHighPriorityKeywords,
  getAllAssignedPages,
  getKeywordStats,
} from './keywords';

export {
  type PageStatus,
  type PageSEOBlueprint,
  PAGE_BLUEPRINTS,
  getPageBlueprint,
  getLivePages,
  getPlannedPages,
  getPageSEOProfile,
} from './keyword-page-map';
