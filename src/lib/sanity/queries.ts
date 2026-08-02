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

export const homeQuery = groq`
  *[_type == "home"][0] {
    heroTitle,
    heroSubtitle,
    heroDescription,
    heroBackgroundImage,
    ctaPrimaryText,
    ctaPrimaryLink,
    ctaSecondaryText,
    ctaSecondaryLink,
    statistics,
    seoTitle,
    seoDescription
  }
`;

export const eventWizardQuery = groq`
  *[_type == "eventWizard"][0] {
    title,
    description,
    coverImage,
    whatsappNumber,
    steps,
    questions,
    recommendations,
    ctaText,
    seoTitle,
    seoDescription
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

export const packagesQuery = groq`
  *[_type == "packageItem"] | order(displayOrder asc) {
    _id,
    packageName,
    "slug": slug.current,
    packageSubtitle,
    price,
    includedServices,
    packageImage,
    features,
    ctaButtonText,
    ctaButtonLink,
    featuredPackage,
    displayOrder,
    seoTitle,
    seoDescription
  }
`;

export const articlesQuery = groq`
  *[_type == "article"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    featuredImage,
    author,
    publishDate,
    category,
    excerpt,
    content,
    tags,
    readTime,
    seoTitle,
    seoDescription
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(displayOrder asc, _createdAt desc) {
    _id,
    clientName,
    coupleName,
    rating,
    review,
    clientPhoto,
    eventType,
    location,
    featured,
    displayOrder
  }
`;

export const faqsQuery = groq`
  *[_type == "faq"] | order(_createdAt desc) {
    _id,
    question,
    answer,
    category
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(displayOrder asc) {
    _id,
    name,
    role,
    category,
    profileImage,
    shortBio,
    detailedBio,
    experience,
    specialization,
    socialLinks,
    featured,
    displayOrder
  }
`;

export const studioLeadershipQuery = groq`
  *[_type == "studioLeadership"] | order(displayOrder asc) {
    _id,
    name,
    position,
    profileImage,
    biography,
    visionStatement,
    experience,
    socialLinks,
    featured,
    displayOrder
  }
`;

export const venuesQuery = groq`
  *[_type == "venue"] | order(venueName asc) {
    _id,
    venueName,
    "slug": slug.current,
    location,
    description,
    coverImage,
    gallery,
    capacity,
    indoorOutdoor,
    googleMapsLink,
    featured
  }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    officeAddress,
    phoneNumbers,
    whatsappNumber,
    email,
    googleMapsEmbed,
    businessHours,
    socialLinks,
    formSettings
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    companyName,
    logo,
    favicon,
    navigationMenu,
    footerContent,
    copyright,
    socialLinks,
    contactInformation,
    seoDefaults
  }
`;

export const portfolioQuery = groq`
  *[_type == "portfolioItem"] | order(displayOrder asc) {
    _id,
    projectTitle,
    "slug": slug.current,
    eventType,
    coverImage,
    gallery,
    clientName,
    description,
    completionDate,
    featured,
    displayOrder
  }
`;
