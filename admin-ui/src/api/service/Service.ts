import { Category } from "../category/Category";
import { Organisation } from "../organisation/Organisation";

export type Service = {
  category?: Category | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  imageUrl: string | null;
  organisation?: Array<Organisation>;
  serviceName: string | null;
  updatedAt: Date;
};
