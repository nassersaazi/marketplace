import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServiceService } from "./service.service";
import { ServiceControllerBase } from "./base/service.controller.base";

@swagger.ApiTags("services")
@common.Controller("services")
export class ServiceController extends ServiceControllerBase {
  constructor(
    protected readonly service: ServiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
