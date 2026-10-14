export const site = {
  name: 'Anthony Horn',
  initials: 'AH',
  // Short descriptor under the name; deliberately not "Web Technology Leader".
  descriptor: 'Web Design & Interactive Media Adventurer',
  description:
    'Anthony Horn connects development, design, user research, and process to help organizations build better digital experiences.',
  // TODO: confirm location before publishing.
  location: null as string | null,
  // TODO: provide a verified contact address. Never invent one.
  email: null as string | null,
};

export type NavIcon = 'home' | 'work' | 'speaking' | 'about' | 'contact';

export const nav: { href: string; label: string; icon: NavIcon }[] = [
  { href: '/', label: 'Home', icon: 'home' },
  { href: '/work/', label: 'Work', icon: 'work' },
  { href: '/speaking/', label: 'Speaking', icon: 'speaking' },
  { href: '/about/', label: 'About', icon: 'about' },
  { href: '/contact/', label: 'Contact', icon: 'contact' },
  // Resume link added once a verified current resume exists.
];
