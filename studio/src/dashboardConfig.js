export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6098599217841e8a5b6e67af",
                  title: "Sanity Studio",
                  name: "sanity-cms-studio-utgfm1ih",
                  apiId: "045907c7-f22a-4097-a4fe-14e3ca9e0f58",
                },
                {
                  buildHookId: "609859937148d30ba78a3855",
                  title: "Blog Website",
                  name: "sanity-cms-web-n1fwciyn",
                  apiId: "344bbb89-effa-44e3-8601-f7be3d2aceb3",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Scosentino/sanity-cms",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-cms-web-n1fwciyn.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
