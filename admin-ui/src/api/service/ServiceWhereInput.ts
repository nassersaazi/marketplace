import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganisationListRelationFilter } from "../organisation/OrganisationListRelationFilter";

export type ServiceWhereInput = {
  category?: CategoryWhereUniqueInput;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  organisation?: OrganisationListRelationFilter;
  serviceName?: StringNullableFilter;
};
