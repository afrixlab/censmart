import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
  svg?: SortOrder;
  category?: SortOrder;
  content?: SortOrder;
};
