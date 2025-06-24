import { Raleway as FontSans, Roboto_Serif as FontSerif } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fontSerif = FontSerif({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const siteConfig = {
  name: 'Resumirchus',
  url: 'https://resumirchus.emirchus.ar',
  ogImage: 'https://resumirchus.emirchus.ar/og.png',
  description: 'A resume builder made by Emirchus',
  links: {
    twitter: 'https://x.com/emirchus',
    github: 'https://github.com/emirchus',
  },
};

export type SiteConfig = typeof siteConfig;
