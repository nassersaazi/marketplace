import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceCreateNestedManyWithoutCategoriesInput } from "./ServiceCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  createdBy?: UserWhereUniqueInput | null;
  services?: ServiceCreateNestedManyWithoutCategoriesInput;
};
