const bomauAbout = {
  name: "bomauAbout",
  title: "Bomau About",
  type: "document",
  fields: [
    {
      name: "aboutSectionImage",
      title: "About  Section Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "aboutsectionSecondTitle",
      title: "About Section Second Title",
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
      name: "aboutSectionSecondDescription",
      title: "About  Section Second Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "aboutButton",
      title: "About  Button",
      type: "string",
    },
  ],
};

export default bomauAbout;
