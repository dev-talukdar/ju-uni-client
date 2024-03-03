import { Button } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
// import UsableFormSelect from "../../components/UsableForm/UsableFormSelect";

const CreateFaculty = () => {
  const onSubmit = () => {};
  console.log("hello");
  return (
    <UsableForm onSubmit={onSubmit}>
      {/* <UsableFormSelect label="Faculty Name" name="name" /> */}
      <Button>Create A Faculty</Button>
    </UsableForm>
  );
};

export default CreateFaculty;
