/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServiceWhereInput } from "./ServiceWhereInput";
import { Type } from "class-transformer";
import { ServiceOrderByInput } from "./ServiceOrderByInput";

@ArgsType()
class ServiceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ServiceWhereInput,
  })
  @Field(() => ServiceWhereInput, { nullable: true })
  @Type(() => ServiceWhereInput)
  where?: ServiceWhereInput;

  @ApiProperty({
    required: false,
    type: [ServiceOrderByInput],
  })
  @Field(() => [ServiceOrderByInput], { nullable: true })
  @Type(() => ServiceOrderByInput)
  orderBy?: Array<ServiceOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ServiceFindManyArgs };