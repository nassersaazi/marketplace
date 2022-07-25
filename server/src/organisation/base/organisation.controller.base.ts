/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { OrganisationService } from "../organisation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { OrganisationCreateInput } from "./OrganisationCreateInput";
import { OrganisationWhereInput } from "./OrganisationWhereInput";
import { OrganisationWhereUniqueInput } from "./OrganisationWhereUniqueInput";
import { OrganisationFindManyArgs } from "./OrganisationFindManyArgs";
import { OrganisationUpdateInput } from "./OrganisationUpdateInput";
import { Organisation } from "./Organisation";
import { ServiceFindManyArgs } from "../../service/base/ServiceFindManyArgs";
import { Service } from "../../service/base/Service";
import { ServiceWhereUniqueInput } from "../../service/base/ServiceWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class OrganisationControllerBase {
  constructor(
    protected readonly service: OrganisationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Organisation })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: OrganisationCreateInput
  ): Promise<Organisation> {
    return await this.service.create({
      data: {
        ...data,

        createdBy: {
          connect: data.createdBy,
        },
      },
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        providerName: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Organisation] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(OrganisationFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Organisation[]> {
    const args = plainToClass(OrganisationFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        providerName: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Organisation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: OrganisationWhereUniqueInput
  ): Promise<Organisation | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        id: true,
        providerName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Organisation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: OrganisationWhereUniqueInput,
    @common.Body() data: OrganisationUpdateInput
  ): Promise<Organisation | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdBy: {
            connect: data.createdBy,
          },
        },
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          id: true,
          providerName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Organisation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: OrganisationWhereUniqueInput
  ): Promise<Organisation | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          id: true,
          providerName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Service",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/services")
  @ApiNestedQuery(ServiceFindManyArgs)
  async findManyServices(
    @common.Req() request: Request,
    @common.Param() params: OrganisationWhereUniqueInput
  ): Promise<Service[]> {
    const query = plainToClass(ServiceFindManyArgs, request.query);
    const results = await this.service.findServices(params.id, {
      ...query,
      select: {
        category: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        createdBy: true,
        id: true,
        imageUrl: true,
        serviceName: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/services")
  async connectServices(
    @common.Param() params: OrganisationWhereUniqueInput,
    @common.Body() body: ServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      services: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/services")
  async updateServices(
    @common.Param() params: OrganisationWhereUniqueInput,
    @common.Body() body: ServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      services: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Organisation",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/services")
  async disconnectServices(
    @common.Param() params: OrganisationWhereUniqueInput,
    @common.Body() body: ServiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      services: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
