import { Button, Col, Flex } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/AcademicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TAcademicFaculty } from "../../../types/academicManagementType";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Faculty is now creating ...");
    const facultyData = {
      name: data.name,
    };

    try {
      const res = (await addAcademicFaculty(
        facultyData
      )) as TResponse<TAcademicFaculty>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }

    //!! console.log(Object.fromEntries(formData));
    // this is for development only _|
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
