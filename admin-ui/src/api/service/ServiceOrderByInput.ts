import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  serviceName?: SortOrder;
  updatedAt?: SortOrder;
};
