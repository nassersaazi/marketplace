/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProviderWhereUniqueInput } from "../../provider/base/ProviderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ProviderUpdateManyWithoutUsersInput {
  @Field(() => [ProviderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProviderWhereUniqueInput],
  })
  connect?: Array<ProviderWhereUniqueInput>;

  @Field(() => [ProviderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProviderWhereUniqueInput],
  })
  disconnect?: Array<ProviderWhereUniqueInput>;

  @Field(() => [ProviderWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProviderWhereUniqueInput],
  })
  set?: Array<ProviderWhereUniqueInput>;
}
export { ProviderUpdateManyWithoutUsersInput };
