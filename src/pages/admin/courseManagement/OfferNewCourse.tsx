import { Button, Col, Flex, Row } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import {
  useGetAllAcademicFacultyQuery,
  useGetAllDepartmentQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/AcademicManagementApi";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/UserManagementApi";
import { daysOptions, timeOptions } from "../../../components/constants/global";

const OfferNewCourse = () => {
  const { data: academicSemesterData } = useGetAllSemestersQuery(undefined);
  const { data: academicDepartmentData } = useGetAllDepartmentQuery(undefined);
  const { data: academicCourseData } = useGetAllCoursesQuery(undefined);
  const { data: FacultyData } = useGetAllFacultiesQuery(undefined);
  const { data: academicFacultyData } =
    useGetAllAcademicFacultyQuery(undefined);

  console.log(academicFacultyData);

  const academicSemesterOptions = academicSemesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const academicFacultiesOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );

  const facultyOptions = FacultyData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name.firstName} ${item.name.middleName} ${item.name.lastName}`,
  }));

  const academicCourseOptions = academicCourseData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <UsableForm onSubmit={onSubmit}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Semester Name"
                name="semesterRegistration"
                options={academicSemesterOptions}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Academic Faculty"
                name="academicFaculty"
                options={academicFacultiesOptions}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Academic Department"
                name="academicDepartment"
                options={academicDepartmentOptions}
              />
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Course Name"
                name="course"
                options={academicCourseOptions}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Faculty Name"
                name="faculty"
                options={facultyOptions}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                label="Section name"
                name="section"
              />
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                label="Max Capacity"
                name="maxCapacity"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                mode="multiple"
                label="Days"
                name="days"
                options={daysOptions}
              />
            </Col>
            {/* dayoption create korte hobe like we did in create semester */}

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Start Time"
                name="startTime"
                options={timeOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="End Time"
                name="endTime"
                options={timeOptions}
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default OfferNewCourse;
