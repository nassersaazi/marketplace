import { Module } from "@nestjs/common";
import { ProviderModuleBase } from "./base/provider.module.base";
import { ProviderService } from "./provider.service";
import { ProviderController } from "./provider.controller";

@Module({
  imports: [ProviderModuleBase],
  controllers: [ProviderController],
  providers: [ProviderService],
  exports: [ProviderService],
})
export class ProviderModule {}
