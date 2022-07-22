import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ServiceServiceBase } from "./base/service.service.base";

@Injectable()
export class ServiceService extends ServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
