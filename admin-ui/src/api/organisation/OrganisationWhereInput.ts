import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type OrganisationWhereInput = {
  createdBy?: UserWhereUniqueInput;
  id?: StringFilter;
  providerName?: StringFilter;
  services?: ServiceListRelationFilter;
};
