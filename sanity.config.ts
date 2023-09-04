import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import bomauWebsite from "./sanity/schemas/hero-schema";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "m6my7t82",
  dataset: "production",
  title: "Bomau Bistro",
  apiVersion: "2023-09-01",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
