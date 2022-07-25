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
import { CategoryService } from "../category.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CategoryCreateInput } from "./CategoryCreateInput";
import { CategoryWhereInput } from "./CategoryWhereInput";
import { CategoryWhereUniqueInput } from "./CategoryWhereUniqueInput";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryUpdateInput } from "./CategoryUpdateInput";
import { Category } from "./Category";
import { ServiceFindManyArgs } from "../../service/base/ServiceFindManyArgs";
import { Service } from "../../service/base/Service";
import { ServiceWhereUniqueInput } from "../../service/base/ServiceWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CategoryControllerBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Category })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: CategoryCreateInput): Promise<Category> {
    return await this.service.create({
      data: {
        ...data,

        createdBy: data.createdBy
          ? {
              connect: data.createdBy,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Category] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(CategoryFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Category[]> {
    const args = plainToClass(CategoryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,

        createdBy: {
          select: {
            id: true,
          },
        },

        description: true,
        id: true,
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
    resource: "Category",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: CategoryWhereUniqueInput,
    @common.Body() data: CategoryUpdateInput
  ): Promise<Category | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          createdBy: data.createdBy
            ? {
                connect: data.createdBy,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          createdBy: {
            select: {
              id: true,
            },
          },

          description: true,
          id: true,
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
    resource: "Category",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Category })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: CategoryWhereUniqueInput
  ): Promise<Category | null> {
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

          description: true,
          id: true,
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
    @common.Param() params: CategoryWhereUniqueInput
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
        description: true,
        domain: true,
        id: true,
        imageUrl: true,
        kind: true,
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
    resource: "Category",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/services")
  async connectServices(
    @common.Param() params: CategoryWhereUniqueInput,
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
    resource: "Category",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/services")
  async updateServices(
    @common.Param() params: CategoryWhereUniqueInput,
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
    resource: "Category",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/services")
  async disconnectServices(
    @common.Param() params: CategoryWhereUniqueInput,
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
