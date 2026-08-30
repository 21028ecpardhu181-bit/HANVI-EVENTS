import { NavLink } from '../types';

export const mainNavLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Event Wizard', href: '/wizard' },
  { label: 'Wedding Traditions', href: '/wedding-experiences' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const footerLinks = {
  experiences: [
    { label: 'Hindu Marriage Ceremonies', href: '/wedding-experiences/hindu' },
    { label: 'Christian Cathedral & Beach Unions', href: '/wedding-experiences/christian' },
    { label: 'Muslim Nikah & Walima Galas', href: '/wedding-experiences/muslim' },
    { label: 'All Wedding Traditions', href: '/wedding-experiences' },
  ],
  celebrations: [
    { label: 'Wedding Planning', href: '/services/wedding-planning' },
    { label: 'Birthdays & Balloons', href: '/services/birthday-parties' },
    { label: 'Bridal Makeup & Nail Art', href: '/services/makeup' },
    { label: 'Catering Feasts', href: '/services/catering' },
    { label: 'Photography & Films', href: '/services/photography' },
    { label: 'Corporate Events & Decor', href: '/services/corporate-decorations' },
    { label: 'All Services Catalog', href: '/services' },
  ],
  journey: [
    { label: 'Engagement Ceremony', href: '/services/engagement' },
    { label: 'Mehendi Soiree', href: '/services/mehendi' },
    { label: 'DJ & Sound Setup', href: '/services/dj' },
    { label: 'Venue & Mandap Booking', href: '/services/venue-booking' },
    { label: 'Live Entertainment', href: '/services/entertainment' },
    { label: 'Cradle & Naming Ceremony', href: '/services/cradle-ceremony' },
  ],
  company: [
    { label: 'About Studio', href: '/about' },
    { label: 'Real Projects', href: '/projects' },
    { label: 'Event Planning Wizard', href: '/wizard' },
    { label: 'Visual Gallery', href: '/gallery' },
    { label: 'Studio Team', href: '/team' },
    { label: 'Contact Us', href: '/contact' },
  ],
};
