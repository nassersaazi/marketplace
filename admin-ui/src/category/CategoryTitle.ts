import { Category as TCategory } from "../api/category/Category";

export const CATEGORY_TITLE_FIELD = "id";

export const CategoryTitle = (record: TCategory): string => {
  return record.id || record.id;
};
