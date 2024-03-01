import { FieldValues, SubmitHandler } from "react-hook-form";
import UsableForm from "../../../components/UsableForm/UsableForm";
import { Button, Col, Flex } from "antd";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import { semesterOptions } from "../../../components/constants/semester";
import { monthOptions } from "../../../components/constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../components/schemas/AcademicManagementSchema";
import { useAddAcademicSemestersMutation } from "../../../redux/features/admin/AcademicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TAcademicSemester } from "../../../types/academicManagementType";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5, 6, 7].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemestersMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Semester is now creating ...");
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    try {
      const res = (await addAcademicSemester(
        semesterData
      )) as TResponse<TAcademicSemester>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("semester created successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UsableForm
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <UsableFormSelect
            label="Semester Name"
            name="name"
            options={semesterOptions}
          />
          <UsableFormSelect label="Year" name="year" options={yearOptions} />

          <UsableFormSelect
            label="Start Month"
            name="startMonth"
            options={monthOptions}
          />
          <UsableFormSelect
            label="End Month"
            name="endMonth"
            options={monthOptions}
          />

          <Button htmlType="submit">Submit</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
