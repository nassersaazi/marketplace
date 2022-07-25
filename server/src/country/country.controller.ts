import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CountryService } from "./country.service";
import { CountryControllerBase } from "./base/country.controller.base";

@swagger.ApiTags("countries")
@common.Controller("countries")
export class CountryController extends CountryControllerBase {
  constructor(
    protected readonly service: CountryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
