import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceUpdateManyWithoutCategoriesInput } from "./ServiceUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  createdBy?: UserWhereUniqueInput | null;
  services?: ServiceUpdateManyWithoutCategoriesInput;
};
