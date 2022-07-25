import { OrganisationWhereInput } from "./OrganisationWhereInput";
import { OrganisationOrderByInput } from "./OrganisationOrderByInput";

export type OrganisationFindManyArgs = {
  where?: OrganisationWhereInput;
  orderBy?: Array<OrganisationOrderByInput>;
  skip?: number;
  take?: number;
};
