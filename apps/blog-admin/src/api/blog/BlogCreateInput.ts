import { InputJsonValue } from "../../types";

export type BlogCreateInput = {
  description?: string | null;
  title?: string | null;
  svg?: InputJsonValue;
  category?: string | null;
  content?: string | null;
};
