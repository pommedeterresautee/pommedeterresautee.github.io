export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerPage: number;
  // Optional AstroPaper-like extensions
  showBackButton?: boolean;
  timezone?: string;
};

export type SocialObject = {
  name: string;
  href: string;
  linkTitle: string;
  active: boolean;
};

export type SocialObjects = SocialObject[];

