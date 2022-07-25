import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CountryServiceBase } from "./base/country.service.base";

@Injectable()
export class CountryService extends CountryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
