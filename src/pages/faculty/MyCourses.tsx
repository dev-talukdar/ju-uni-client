import { Button, Col, Flex } from "antd";
import UsableForm from "../../components/UsableForm/UsableForm";
import UsableFormSelect from "../../components/UsableForm/UsableFormSelect";
import { useGetAllFacultyCourseQuery } from "../../redux/features/faculty/facultyCoursesApi";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";

const MyCourses = () => {
  const { data: facultyCoursesData } = useGetAllFacultyCourseQuery(undefined);
  const navigate = useNavigate();

  console.log(facultyCoursesData);

  const semesterOptions = facultyCoursesData?.data?.map((item) => ({
    label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    value: item.semesterRegistration._id,
  }));

  const courseOptions = facultyCoursesData?.data?.map((item) => ({
    label: item.course.title,
    value: item.course._id,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    navigate(`/faculty/courses/${data.semesterRegistration}/${data.course}`);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UsableForm onSubmit={onSubmit}>
          <UsableFormSelect
            options={semesterOptions}
            name="semesterRegistration"
            label="Semester"
          />

          <UsableFormSelect
            options={courseOptions}
            name="course"
            label="Course"
          />

          <Button htmlType="submit">Submit</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default MyCourses;
