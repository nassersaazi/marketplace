import { Category } from "../category/Category";
import { Organisation } from "../organisation/Organisation";

export type User = {
  categories?: Array<Category>;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organisations?: Array<Organisation>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
