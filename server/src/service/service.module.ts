import { Module } from "@nestjs/common";
import { ServiceModuleBase } from "./base/service.module.base";
import { ServiceService } from "./service.service";
import { ServiceController } from "./service.controller";

@Module({
  imports: [ServiceModuleBase],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class ServiceModule {}
