import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  createdAt?: SortOrder;
  createdById?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
