import { FieldValues, SubmitHandler } from "react-hook-form";
import UsableForm from "../../../components/UsableForm/UsableForm";
import { Button, Col, Flex } from "antd";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import { semesterOptions } from "../../../components/constants/semester";
import { monthOptions } from "../../../components/constants/global";

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5, 6, 7].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UsableForm onSubmit={onSubmit}>
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
