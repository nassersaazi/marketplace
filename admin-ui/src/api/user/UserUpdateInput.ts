import { CategoryUpdateManyWithoutUsersInput } from "./CategoryUpdateManyWithoutUsersInput";
import { OrganisationUpdateManyWithoutUsersInput } from "./OrganisationUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  categories?: CategoryUpdateManyWithoutUsersInput;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  organisations?: OrganisationUpdateManyWithoutUsersInput;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
