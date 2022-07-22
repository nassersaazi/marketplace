import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrganisationResolverBase } from "./base/organisation.resolver.base";
import { Organisation } from "./base/Organisation";
import { OrganisationService } from "./organisation.service";

@graphql.Resolver(() => Organisation)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OrganisationResolver extends OrganisationResolverBase {
  constructor(
    protected readonly service: OrganisationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
