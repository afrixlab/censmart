import { InputJsonValue } from "../../types";

export type BlogUpdateInput = {
  description?: string | null;
  title?: string | null;
  svg?: InputJsonValue;
  category?: string | null;
  content?: string | null;
  user?: string | null;
};
