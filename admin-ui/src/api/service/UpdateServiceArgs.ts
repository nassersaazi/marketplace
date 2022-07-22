import { ServiceWhereUniqueInput } from "./ServiceWhereUniqueInput";
import { ServiceUpdateInput } from "./ServiceUpdateInput";

export type UpdateServiceArgs = {
  where: ServiceWhereUniqueInput;
  data: ServiceUpdateInput;
};
