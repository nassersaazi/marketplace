import { Module } from "@nestjs/common";
import { ServiceModuleBase } from "./base/service.module.base";
import { ServiceService } from "./service.service";
import { ServiceController } from "./service.controller";
import { ServiceResolver } from "./service.resolver";

@Module({
  imports: [ServiceModuleBase],
  controllers: [ServiceController],
  providers: [ServiceService, ServiceResolver],
  exports: [ServiceService],
})
export class ServiceModule {}
