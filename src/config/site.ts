export const siteConfig = {
  name: 'BuildNext',
  description: 'AI-Powered Project Idea Generator for Developers',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: 'https://buildnext.app/og-image.png',
  links: {
    twitter: 'https://twitter.com/buildnextapp',
    github: 'https://github.com/buildnext/buildnext',
    docs: 'https://docs.buildnext.app',
  },
  authors: [
    {
      name: 'BuildNext Team',
      url: 'https://buildnext.app',
    },
  ],
};

export const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/docs', label: 'Docs' },
  { href: '/blog', label: 'Blog' },
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Security', href: '/security' },
    { label: 'Status', href: 'https://status.buildnext.app' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Security', href: '/security' },
  ],
  social: [
    { label: 'Twitter', href: 'https://twitter.com/buildnextapp' },
    { label: 'GitHub', href: 'https://github.com/buildnext/buildnext' },
    { label: 'Discord', href: 'https://discord.gg/buildnext' },
  ],
};
