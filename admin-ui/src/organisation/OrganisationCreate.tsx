import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const OrganisationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="Created By">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Provider Name" source="providerName" />
        <ReferenceArrayInput
          source="services"
          reference="Service"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServiceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};