import { type SchemaTypeDefinition } from 'sanity';
import { serviceType } from './service';
import { homeType } from './home';
import { eventWizardType } from './eventWizard';
import { weddingTraditionType } from './weddingTradition';
import { storyType } from './story';
import { galleryMediaType } from './galleryMedia';
import { packageItemType } from './packageItem';
import { articleType } from './article';
import { testimonialType } from './testimonial';
import { faqType } from './faq';
import { teamMemberType } from './teamMember';
import { studioLeadershipType } from './studioLeadership';
import { venueType } from './venue';
import { contactPageType } from './contactPage';
import { siteSettingsType } from './siteSettings';
import { portfolioItemType } from './portfolioItem';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
    homeType,
    eventWizardType,
    weddingTraditionType,
    storyType,
    galleryMediaType,
    packageItemType,
    articleType,
    testimonialType,
    faqType,
    teamMemberType,
    studioLeadershipType,
    venueType,
    contactPageType,
    siteSettingsType,
    portfolioItemType,
  ],
};
