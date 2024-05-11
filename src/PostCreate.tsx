import { Create, SimpleForm, TextInput, useNotify } from "react-admin";
import { Alert } from "@mui/material";

const CustomAlertComponent = () => {
  return <Alert severity="error">Tis does not work</Alert>;
};

export const PostCreate = () => {
  const notify = useNotify();
  return (
    <Create
      mutationOptions={{
        onError: () => {
          // This does not work (creates a blank page with no content):
          notify(<CustomAlertComponent />);
          // This works:
          // notify(<Alert severity="error">This works</Alert>);
        },
      }}
    >
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Create>
  );
};
