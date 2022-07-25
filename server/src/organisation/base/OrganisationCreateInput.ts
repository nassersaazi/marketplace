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
import { ValidateNested, IsString, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { ServiceCreateNestedManyWithoutOrganisationsInput } from "./ServiceCreateNestedManyWithoutOrganisationsInput";
@InputType()
class OrganisationCreateInput {
  @ApiProperty({
    required: true,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @Field(() => UserWhereUniqueInput)
  createdBy!: UserWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  providerName!: string;

  @ApiProperty({
    required: false,
    type: () => ServiceCreateNestedManyWithoutOrganisationsInput,
  })
  @ValidateNested()
  @Type(() => ServiceCreateNestedManyWithoutOrganisationsInput)
  @IsOptional()
  @Field(() => ServiceCreateNestedManyWithoutOrganisationsInput, {
    nullable: true,
  })
  services?: ServiceCreateNestedManyWithoutOrganisationsInput;
}
export { OrganisationCreateInput };
