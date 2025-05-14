import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { types } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Kolektiv Rudar Bosna Website",

  projectId: "qsk2k0nf",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("post").title("Posts"),
            S.documentTypeListItem("author").title("Authors"),
            S.documentTypeListItem("category").title("Categories"),
            // Add more document types here as needed
          ]),
    }),
  ],

  schema: {
    types,
  },
});
