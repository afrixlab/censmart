import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
        <div />
        <TextInput label="category" source="category" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
