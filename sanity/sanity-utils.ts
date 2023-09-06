import { createClient, groq } from "next-sanity";
import { bomauHero } from "../types/sanity-types";

export async function getData() {
  const client = createClient({
    projectId: "m6my7t82",
    dataset: "production",
    apiVersion: "2023-09-01",
  });

  // Define a GROQ query to fetch data for bomauHero
  const query = groq`*[_type == "bomauHero"] {
    _id,
    _createdAt,
    heroSectionFirstLine,
    heroSectionSecondLine,
    heroSectionDescription,
    heroButton,
    "heroSectionImage": heroSectionImage.asset->url
  }`;

  // Define a GROQ query to fetch data for bomauAbout
  const queryAbout = groq`*[_type == "bomauAbout"] {
      _id,
      _createdAt,
      aboutsectionFirstTitle,
      aboutsectionSecondTitle,
      aboutSectionDescription,
      aboutSectionSecondDescription,
      aboutButton,
      "aboutSectionImage": aboutSectionImage.asset->url
    }`;
  // Define a GROQ query to fetch data for bomauVibe
  const queryVibe = groq`*[_type == "bomauVibe"] {
      _id,
      _createdAt,
      vibesectionFirstTitle,
      vibesectionSecondTitle,
      vibeSectionDescription,
      vibeSectionSecondDescription,
      "vibeSectionImage": vibeSectionImage.asset->url
    }`;
  // Define a GROQ query to fetch data for bomauFooter
  const queryFooter = groq`*[_type == "bomauFooter"] {
  _id,
  _createdAt,
  footerFirstSection,
  footerSecondSection,
  footerThirdSection,
}`;
  // Define a GROQ query to fetch data for bomauMenu
  const queryMenu = groq`*[_type == "bomauMenu"] {
  _id,
  _createdAt,
  image,
}`;
  // Define a GROQ query to fetch data for bomauGallery
  const queryGallery = groq`*[_type == "bomauGallery"] {
  _id,
  _createdAt,
  images,
}`;

  // Execute both queries concurrently
  const [heroData, aboutData, vibeData, footerData, menuData, galleryData] = await Promise.all([
    client.fetch(query),
    client.fetch(queryAbout),
    client.fetch(queryVibe),
    client.fetch(queryFooter),
    client.fetch(queryMenu),
    client.fetch(queryGallery),
  ]);

  // Return the combined data as an object
  return { bomauHero: heroData, bomauAbout: aboutData, bomauVibe: vibeData, bomauFooter: footerData, bomauMenu: menuData, bomauGallery: galleryData };
}
