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

  // Execute the query
  const data = await client.fetch(query);

  return data;
}
