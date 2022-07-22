import { CategoryCreateNestedManyWithoutUsersInput } from "./CategoryCreateNestedManyWithoutUsersInput";
import { OrganisationCreateNestedManyWithoutUsersInput } from "./OrganisationCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  categories?: CategoryCreateNestedManyWithoutUsersInput;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  organisations?: OrganisationCreateNestedManyWithoutUsersInput;
  password: string;
  roles: Array<string>;
  username: string;
};
