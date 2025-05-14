import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";

export const types: SchemaTypeDefinition[] = [
  blockContentType,
  categoryType,
  postType,
  authorType,
];
