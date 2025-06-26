import {
  Raleway as FontSans,
  Roboto_Serif as FontSerif,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const siteConfig = {
  name: "Resumirchus",
  url: "https://resumirchus.emirchus.ar",
  ogImage: "https://resumirchus.emirchus.ar/og.png",
  description:
    "Craft a polished, professional resume in minutes using our cutting-edge, AI-powered resume builder. No more endless formatting or worrying about structure—just the perfect resume, every time.",
  links: {
    twitter: "https://x.com/emirchus",
    github: "https://github.com/emirchus",
  },
};

export type SiteConfig = typeof siteConfig;
