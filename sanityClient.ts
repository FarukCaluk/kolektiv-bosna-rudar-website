import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "qsk2k0nf",
  dataset: "production",
  apiVersion: "2023-10-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

export default client;
