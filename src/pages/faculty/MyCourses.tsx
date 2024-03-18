import { Button, Col, Flex } from "antd";
import UsableForm from "../../components/UsableForm/UsableForm";
import UsableFormSelect from "../../components/UsableForm/UsableFormSelect";
import { useGetAllFacultyCourseQuery } from "../../redux/features/faculty/facultyCoursesApi";

const MyCourses = () => {
  const { data: facultyCoursesData } = useGetAllFacultyCourseQuery(undefined);

  console.log(facultyCoursesData);

  const semesterOptions = facultyCoursesData?.data?.map((item) => ({
    label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    value: item.semesterRegistration._id,
  }));

  const courseOptions = facultyCoursesData?.data?.map((item) => ({
    label: item.course.title,
    value: item.course._id,
  }));

  const onSubmit = (data) => {
    console.log(data);
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
