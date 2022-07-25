import { User } from "../user/User";
import { Service } from "../service/Service";

export type Organisation = {
  createdAt: Date;
  createdBy?: User;
  id: string;
  providerName: string;
  services?: Array<Service>;
  updatedAt: Date;
};
