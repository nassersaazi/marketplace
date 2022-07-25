/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ServiceCreateNestedManyWithoutCategoriesInput } from "./ServiceCreateNestedManyWithoutCategoriesInput";
@InputType()
class CategoryCreateInput {
  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  createdBy?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => ServiceCreateNestedManyWithoutCategoriesInput,
  })
  @ValidateNested()
  @Type(() => ServiceCreateNestedManyWithoutCategoriesInput)
  @IsOptional()
  @Field(() => ServiceCreateNestedManyWithoutCategoriesInput, {
    nullable: true,
  })
  services?: ServiceCreateNestedManyWithoutCategoriesInput;
}
export { CategoryCreateInput };
