import { FieldValues, SubmitHandler } from "react-hook-form";
import UsableForm from "../../../components/UsableForm/UsableForm";
import { Button, Col, Flex } from "antd";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";

const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4, 5, 6, 7].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

console.log(yearOptions);

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data.name) - 1].label;
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
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
            options={nameOptions}
          />
          <UsableFormSelect label="Year" name="year" options={yearOptions} />
          <UsableFormSelect
            label="Start Month"
            name="startMonth"
            options={yearOptions}
          />
          <UsableFormSelect
            label="End Month"
            name="endMonth"
            options={yearOptions}
          />

          <Button htmlType="submit">Submit</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
