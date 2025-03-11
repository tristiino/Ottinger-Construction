export default {
    name: "blog",
    title: "Blog Posts",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "beforeImage",
        title: "Before Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "afterImage",
        title: "After Image",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "timestamp",
        title: "Date Posted",
        type: "datetime",
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  