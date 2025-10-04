import {FacebookIcon, InstagramIcon, LinkedInIcon, LinktreeIcon} from '@/components/SocialMediaIcons';

export const protegeTimelineData = [
  { text: 'Opening Ceremony'},
  { text: 'Midterm Checkpoint 1' },
  { text: 'Midterm Checkpoint 2'},
  { text: 'Closing Ceremony'}
];

export const navData = [
  { text: 'About Us', href: '/about-us' },
  { text: 'Events', href: '/events' },
  { text: 'Programs', href: '/programs',
    subData: [
      { text: 'Protege Program', href: '/programs/protege-program' },
      { text: 'Industry Mentoring Program', href: '/programs/industry-mentoring-program' },
    ]
  },
  { text: 'Sponsors', href: '/sponsors' },
  { text: 'Careers', href: '/careers' },
  // { text: 'WIE Inspire', href: '/wie-inspire' },
  { text: 'Newsletter', href: '/newsletter' },
  { text: 'Contact Us', href: '/contact-us' }
];

export const socialsData = [
  { Icon: FacebookIcon, href: 'https://www.facebook.com/wiesocunsw' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/wiesocunsw/' },
  { Icon: LinkedInIcon, href: 'https://au.linkedin.com/company/unsw-wiesoc' },
];

export const protegeData = [
  {
    quote: 'The Protégé Program was easily one of the most enjoyable and rewarding experiences at UNSW. Not only was it great to help my mentees with any queries they have, but seeing them come out of their shells and make new friends was what made this program so memorable.',
    by: 'Olivia (Former Mentor)'
  },
  {
    quote: 'As a WIESOC peer mentor, you forge new friendships and gain invaluable leadership skills. It meant I was able to give the first years the same support I received when I first started. It was the highlight of my week with a program full of fun challenges and competitions and a great group of people.',
    by: 'Nicole (Former Mentor)'
  },
  {
    quote: 'The Protégé Program was an amazing experience which made the start of uni so much easier through the guidance of a mentor. It was a great way to meet fellow girls in engineering through the fun events and activities. I met some of my closest friends at uni through the program too!',
    by: 'Eeman (Former Mentee)'
  }
];

export const impData = [
  {
    quote: 'This program has taught me so much more about the value of professional conduct, networking and personal development than anything else throughout my degree. More importantly, it provided me with a mentor who I could go to for any professional advice - something I have never had before. A well-structured program with a wealth of opportunities for personal growth - highly recommend it!',
    by: 'Suvekchhya (Former Mentee)'
  },
  {
    quote: 'WIESOC\'s IMP was a really great program - I got to understand more about which skills I should develop for the industry that I\'m interested in, and my mentor answered all my questions about gaining experience and progressing my career.',
    by: 'Olivia (Former Mentee)'
  },
  {
    quote: 'Being part of WIESoc’s Industry Mentoring Program was a valuable experience that gave me an insight into what a career in engineering could look like. I was given the opportunity to work with an industry mentor who gave me the support and guidance I needed to expand my understanding of the industry. I would highly recommend the program!',
    by: 'Nityaa (Former Mentee)'
  }
];