const bomauVibe = {
  name: "bomauVibe",
  title: "Bomau Vibe",
  type: "document",
  fields: [
    {
      name: "vibesectionFirstTitle",
      title: "Vibe Section First Title",
      type: "document",
      fields: [
        {
          name: "firsttitle",
          title: "First Title",
          type: "string",
        },
        {
          name: "secondtitle",
          title: "Second Title",
          type: "string",
        },
      ],
    },

    {
      name: "vibeSectionDescription",
      title: "Vibe  Section Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "vibeSectionImage",
      title: "Vibe  Section Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "vibesectionSecondTitle",
      title: "Vibe Section Second Title",
      type: "document",
      fields: [
        {
          name: "firsttitle",
          title: "First Title",
          type: "string",
        },
        {
          name: "secondtitle",
          title: "Second Title",
          type: "string",
        },
      ],
    },
    {
      name: "vibeSectionSecondDescription",
      title: "Vibe  Section Second Description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default bomauVibe;
