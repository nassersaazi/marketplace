import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProviderServiceBase } from "./base/provider.service.base";

@Injectable()
export class ProviderService extends ProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
