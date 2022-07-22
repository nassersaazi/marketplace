import { CategoryListRelationFilter } from "../category/CategoryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganisationListRelationFilter } from "../organisation/OrganisationListRelationFilter";

export type UserWhereInput = {
  categories?: CategoryListRelationFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  organisations?: OrganisationListRelationFilter;
  username?: StringFilter;
};
