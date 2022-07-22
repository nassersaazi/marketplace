import { ServiceWhereInput } from "./ServiceWhereInput";
import { ServiceOrderByInput } from "./ServiceOrderByInput";

export type ServiceFindManyArgs = {
  where?: ServiceWhereInput;
  orderBy?: Array<ServiceOrderByInput>;
  skip?: number;
  take?: number;
};
