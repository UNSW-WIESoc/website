import {FacebookIcon, InstagramIcon, LinkedInIcon} from '@/components/SocialMediaIcons';

export const navData = [
  { text: 'About Us', href: '/about-us' },
  { text: 'Events', href: '/events' },
  { text: 'Programs', href: '/programs',
    subData: [
      { text: 'Protege Program', href: '/programs/protege-program' },
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

export const protegeData = [
  {
    quote: 'The Protégé Program was easily one of the most enjoyable and rewarding experiences at UNSW. Not only was it great to help my mentees with any queries they have, but seeing them come out of their shells and make new friends was what made this program so memorable.',
    by: 'Olivia Widjaja (Former Protégé Program Mentor)'
  },
  {
    quote: 'As a WIESOC peer mentor, you forge new friendships and gain invaluable leadership skills. It meant I was able to give the first years the same support I received when I first started. It was the highlight of my week with a program full of fun challenges and competitions and a great group of people.',
    by: 'Nicole Sroba (Former Protégé Program Mentor)'
  },
  {
    quote: 'The Protégé Program was an amazing experience which made the start of uni so much easier through the guidance of a mentor. It was a great way to meet fellow girls in engineering through the fun events and activities. I met some of my closest friends at uni through the program too!',
    by: 'Eeman Chaudhry (Former Protégé Program Mentee)'
  }
];