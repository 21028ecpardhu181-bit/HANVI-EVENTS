import { type SchemaTypeDefinition } from 'sanity';
import { serviceType } from './service';
import { weddingTraditionType } from './weddingTradition';
import { sacredJourneyType } from './sacredJourney';
import { storyType } from './story';
import { galleryMediaType } from './galleryMedia';
import { teamMemberType } from './teamMember';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    serviceType,
    weddingTraditionType,
    sacredJourneyType,
    storyType,
    galleryMediaType,
    teamMemberType,
  ],
};

