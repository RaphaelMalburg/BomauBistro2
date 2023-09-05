const bomauHero = {
  name: "bomauHero",
  title: "Bomau Hero",
  type: "document",
  fields: [
    {
      name: "heroSectionFirstLine",
      title: "Hero Section First Line",
      type: "string",
    },
    {
      name: "heroSectionSecondLine",
      title: "Hero Section Second Line",
      type: "string",
    },
    {
      name: "heroSectionDescription",
      title: "Hero Section Description",
      type: "string",
    },
    {
      name: "heroSectionImage",
      title: "Hero Section Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "heroButton",
      title: "Hero Button",
      type: "string",
    },
  ],
};

export default bomauHero;
