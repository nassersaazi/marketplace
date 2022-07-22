import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OrganisationService } from "./organisation.service";
import { OrganisationControllerBase } from "./base/organisation.controller.base";

@swagger.ApiTags("organisations")
@common.Controller("organisations")
export class OrganisationController extends OrganisationControllerBase {
  constructor(
    protected readonly service: OrganisationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
