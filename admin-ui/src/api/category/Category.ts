import { User } from "../user/User";
import { Service } from "../service/Service";

export type Category = {
  createdAt: Date;
  createdBy?: User | null;
  id: string;
  services?: Array<Service>;
  updatedAt: Date;
};
