import {FacebookIcon, InstagramIcon, LinkedInIcon} from '@/components/SocialMediaIcons';

export const navData = [
  { text: 'About Us', href: '/about-us' },
  { text: 'Events', href: '/events' },
  { text: 'Programs', href: '/programs',
    subData: [
      { text: 'Protege Program', href: '/protege-program' },
      { text: 'Industry Mentoring Program', href: '/industry-mentoring-program' },
    ]
  },
  { text: 'Sponsors', href: '/sponsors' },
  { text: 'Careers', href: '/careers' },
  { text: 'Contact Us', href: '/contact-us' },
];

export const socialsData = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/wieunsw/' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/wieunsw/' },
  { Icon: LinkedInIcon, href: 'https://au.linkedin.com/company/unsw-wiesoc' },
];
