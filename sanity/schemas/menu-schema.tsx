const bomauMenu = {
  name: "bomauMenu",
  title: "Bomau Menu",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image1",
          title: "Image1",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image2",
          title: "Image2",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
export default bomauMenu;
