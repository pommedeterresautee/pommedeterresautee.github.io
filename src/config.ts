import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://pommedeterresautee.github.io",
  author: "Michaël Benesty",
  desc: "Legal x Engineering x ML",
  title: "pommedeterresautee",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  showBackButton: true,
  timezone: "Europe/Paris",
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pommedeterresautee",
    linkTitle: `${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/pommedeterre33",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mbenesty/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
];
