import { Module } from "@nestjs/common";
import { OrganisationModuleBase } from "./base/organisation.module.base";
import { OrganisationService } from "./organisation.service";
import { OrganisationController } from "./organisation.controller";

@Module({
  imports: [OrganisationModuleBase],
  controllers: [OrganisationController],
  providers: [OrganisationService],
  exports: [OrganisationService],
})
export class OrganisationModule {}
