import { JsonValue } from "type-fest";

export type Blog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  title: string | null;
  svg: JsonValue;
  category: string | null;
  content: string | null;
  user: string | null;
};
