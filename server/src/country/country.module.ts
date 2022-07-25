import { Module } from "@nestjs/common";
import { CountryModuleBase } from "./base/country.module.base";
import { CountryService } from "./country.service";
import { CountryController } from "./country.controller";

@Module({
  imports: [CountryModuleBase],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
