import { PortableTextBlock } from "sanity";

export type bomauHero = {
  _id: string;
  _createdAt: string;
  heroSectionFirstLine: string;
  heroSectionSecondLine: string;
  heroSectionDescription: PortableTextBlock[];
  heroButton: string;
  heroSectionImage: string;
};

type bomauAbout = {
  _id: string;
  _createdAt: string;

  aboutSectionDescription: PortableTextBlock[];
  aboutSectionSecondDescription: PortableTextBlock[];
  aboutButton: string;
};
type aboutsectionFirstTitle = {
  firsttitle: string;
  secondtitle: string;
};

type aboutsectionSecondTitle = {
  firsttitle: string;
  secondtitle: string;
};
