import { Button, Col, Flex } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TAcademicDepartment } from "../../../types/academicManagementType";
import { useAddAcademicDepartmentMutation } from "../../../redux/features/admin/AcademicManagementApi";

const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Faculty is now creating ...");

    const departmentData = {
      name: data.name,
      academicFaculty: data.academicFaculty,
    };

    try {
      const res = (await addAcademicDepartment(
        departmentData
      )) as TResponse<TAcademicDepartment>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UsableForm onSubmit={onSubmit}>
          <UsableFormInput type="text" name="name" label="Department Name" />
          <UsableFormInput
            type="text"
            name="academicFaculty"
            label="Academic Faculty"
          />
          <Button htmlType="submit">Create Department</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
