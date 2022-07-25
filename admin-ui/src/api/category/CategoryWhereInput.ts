import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type CategoryWhereInput = {
  createdBy?: UserWhereUniqueInput;
  id?: StringFilter;
  services?: ServiceListRelationFilter;
};
