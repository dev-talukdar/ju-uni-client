import { Button, Col, Flex } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicFaculty = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UsableForm onSubmit={onSubmit}>
          <UsableFormInput type="text" name="name" label="Name" />
          <Button htmlType="submit">Create Faculty</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
