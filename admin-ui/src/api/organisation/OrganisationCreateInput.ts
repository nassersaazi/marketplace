import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceCreateNestedManyWithoutOrganisationsInput } from "./ServiceCreateNestedManyWithoutOrganisationsInput";

export type OrganisationCreateInput = {
  createdBy: UserWhereUniqueInput;
  providerName: string;
  services?: ServiceCreateNestedManyWithoutOrganisationsInput;
};
