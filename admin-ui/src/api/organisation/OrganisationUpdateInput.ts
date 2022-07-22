import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ServiceUpdateManyWithoutOrganisationsInput } from "./ServiceUpdateManyWithoutOrganisationsInput";

export type OrganisationUpdateInput = {
  createdBy?: UserWhereUniqueInput;
  providerName?: string;
  services?: ServiceUpdateManyWithoutOrganisationsInput;
};
