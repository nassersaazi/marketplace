import { Module } from "@nestjs/common";
import { CategoryModuleBase } from "./base/category.module.base";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";

@Module({
  imports: [CategoryModuleBase],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
