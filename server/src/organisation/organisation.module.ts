import { Module } from "@nestjs/common";
import { OrganisationModuleBase } from "./base/organisation.module.base";
import { OrganisationService } from "./organisation.service";
import { OrganisationController } from "./organisation.controller";
import { OrganisationResolver } from "./organisation.resolver";

@Module({
  imports: [OrganisationModuleBase],
  controllers: [OrganisationController],
  providers: [OrganisationService, OrganisationResolver],
  exports: [OrganisationService],
})
export class OrganisationModule {}
