import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrganisationUpdateManyWithoutServicesInput } from "./OrganisationUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  createdBy?: string | null;
  imageUrl?: string | null;
  organisation?: OrganisationUpdateManyWithoutServicesInput;
  serviceName?: string | null;
};
