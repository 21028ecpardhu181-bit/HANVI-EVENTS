import { groq } from 'next-sanity';

export const servicesQuery = groq`
  *[_type == "service"] | order(displayOrder asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    featured,
    displayOrder,
    shortDescription,
    description,
    heroImage,
    galleryImages,
    icon,
    features,
    startingPrice,
    duration,
    seoTitle,
    seoDescription,
    faq
  }
`;

export const weddingTraditionsQuery = groq`
  *[_type == "weddingTradition"] | order(_createdAt asc) {
    _id,
    traditionTitle,
    "slug": slug.current,
    region,
    description,
    coverImage,
    galleryImages,
    videoUrl,
    rituals,
    seoTitle,
    seoDescription
  }
`;

export const storiesQuery = groq`
  *[_type == "story"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    coupleName,
    eventType,
    location,
    eventDate,
    coverImage,
    gallery,
    storyContent,
    featured,
    quote,
    guestCount,
    seoTitle,
    seoDescription
  }
`;

export const galleryMediaQuery = groq`
  *[_type == "galleryMedia"] | order(displayOrder asc, _createdAt desc) {
    _id,
    albumTitle,
    category,
    coverImage,
    images,
    videos,
    eventName,
    featured,
    displayOrder,
    type,
    videoUrl,
    views
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(featured desc, displayOrder asc, _createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    role,
    category,
    shortBio,
    detailedBio,
    profileImage,
    coverImage,
    galleryImages,
    videos[] {
      title,
      url,
      "assetUrl": asset->url,
      "fileUrl": file.asset->url
    },
    experience,
    skills,
    socialLinks,
    contactInfo,
    featured,
    displayOrder,
    seoTitle,
    seoDescription
  }
`;

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && (slug.current == $slug || _id == $slug)][0] {
    _id,
    name,
    "slug": slug.current,
    role,
    category,
    shortBio,
    detailedBio,
    profileImage,
    coverImage,
    galleryImages,
    videos[] {
      title,
      url,
      "assetUrl": asset->url,
      "fileUrl": file.asset->url
    },
    experience,
    skills,
    socialLinks,
    contactInfo,
    featured,
    displayOrder,
    seoTitle,
    seoDescription
  }
`;

/**
 * Sacred Journey Collection — fetch steps for a specific wedding tradition.
 * Ordered by displayOrder first, then stepNumber.
 */
export const sacredJourneyByTraditionQuery = groq`
  *[_type == "sacredJourney" && (
    weddingTradition->slug.current == $traditionSlug ||
    weddingTradition->_id == $traditionSlug ||
    weddingTradition->_id == "tradition-" + $traditionSlug ||
    weddingTradition->slug.current match $traditionSlug + "*" ||
    $traditionSlug match weddingTradition->slug.current + "*" ||
    lower(weddingTradition->traditionTitle) match "*" + $traditionSlug + "*"
  )]
  | order(displayOrder asc, stepNumber asc) {
    _id,
    journeyTitle,
    "slug": slug.current,
    "traditionSlug": weddingTradition->slug.current,
    "traditionId": weddingTradition->_id,
    "traditionTitle": weddingTradition->traditionTitle,
    stepNumber,
    displayOrder,
    journeyLabel,
    timeline,
    ceremonyName,
    shortDescription,
    detailedDescription,
    heroImage,
    highlights,
    decorIdeas
  }
`;

/**
 * Sacred Journey Collection — fetch ALL steps (used for static params generation).
 */
export const allSacredJourneyStepsQuery = groq`
  *[_type == "sacredJourney"] | order(displayOrder asc, stepNumber asc) {
    _id,
    journeyTitle,
    "slug": slug.current,
    "traditionSlug": weddingTradition->slug.current,
    "traditionId": weddingTradition->_id,
    "traditionTitle": weddingTradition->traditionTitle,
    stepNumber,
    displayOrder,
    journeyLabel,
    timeline,
    ceremonyName,
    shortDescription,
    detailedDescription,
    heroImage,
    highlights,
    decorIdeas
  }
`;
