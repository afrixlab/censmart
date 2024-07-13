import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BlogWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  svg?: JsonFilter;
  category?: StringNullableFilter;
  content?: StringNullableFilter;
};
