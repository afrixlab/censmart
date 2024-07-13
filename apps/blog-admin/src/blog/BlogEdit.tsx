import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BlogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="title" source="title" />
        <div />
        <TextInput label="category" source="category" />
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Edit>
  );
};
