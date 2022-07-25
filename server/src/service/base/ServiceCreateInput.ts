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
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OrganisationCreateNestedManyWithoutServicesInput } from "./OrganisationCreateNestedManyWithoutServicesInput";
@InputType()
class ServiceCreateInput {
  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrganisationCreateNestedManyWithoutServicesInput,
  })
  @ValidateNested()
  @Type(() => OrganisationCreateNestedManyWithoutServicesInput)
  @IsOptional()
  @Field(() => OrganisationCreateNestedManyWithoutServicesInput, {
    nullable: true,
  })
  organisation?: OrganisationCreateNestedManyWithoutServicesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  serviceName?: string | null;
}
export { ServiceCreateInput };