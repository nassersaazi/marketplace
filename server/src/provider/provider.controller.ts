import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProviderService } from "./provider.service";
import { ProviderControllerBase } from "./base/provider.controller.base";

@swagger.ApiTags("providers")
@common.Controller("providers")
export class ProviderController extends ProviderControllerBase {
  constructor(
    protected readonly service: ProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
