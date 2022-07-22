import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrganisationCreateNestedManyWithoutServicesInput } from "./OrganisationCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  createdBy?: string | null;
  imageUrl?: string | null;
  organisation?: OrganisationCreateNestedManyWithoutServicesInput;
  serviceName?: string | null;
};
