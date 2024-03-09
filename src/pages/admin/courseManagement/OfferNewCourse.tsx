import { Button, Col, Flex, Row } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import {
  useGetAllAcademicFacultyQuery,
  useGetAllDepartmentQuery,
} from "../../../redux/features/admin/AcademicManagementApi";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import {
  useAddOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
  useGetCourseFacultiesQuery,
} from "../../../redux/features/admin/courseManagementApi";

import { daysOptions, timeOptions } from "../../../components/constants/global";
import { useState } from "react";
import UsableSelectWithWatch from "../../../components/UsableForm/UsableSelectWithWatch";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import { TOfferedCourse } from "../../../types/courseManagementType";

const OfferNewCourse = () => {
  const [facultyId, setFacultyId] = useState("");
  const [addOfferedCourse] = useAddOfferedCourseMutation(undefined);
  const { data: semesterRegistrationData } =
    useGetAllRegisteredSemestersQuery(undefined);
  const { data: academicDepartmentData } = useGetAllDepartmentQuery(undefined);
  const { data: academicCourseData } = useGetAllCoursesQuery(undefined);
  const { data: fetchingFaculties } = useGetCourseFacultiesQuery(facultyId, {
    skip: !facultyId,
  });
  const { data: academicFacultyData } =
    useGetAllAcademicFacultyQuery(undefined);
  // console.log(facultyId);
  // console.log(isError);
  // console.log(error);
  // console.log(semesterRegistrationData);

  const academicSemesterOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.status}`,
    })
  );

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

  const facultyOptions = fetchingFaculties?.data?.faculties?.map(
    (item: any) => ({
      value: item._id,
      label: item.fullName,
    })
  );

  const academicCourseOptions = academicCourseData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Faculty is now creating ...");
    const offeredCourseData = {
      semesterRegistration: data.semesterRegistration,
      academicFaculty: data.academicFaculty,
      academicDepartment: data.academicDepartment,
      course: data.course,
      faculty: data.faculty,
      section: parseInt(data.section),
      maxCapacity: parseInt(data.maxCapacity),
      days: data.days,
      startTime: data.startTime,
      endTime: data.endTime,
      name: data.name,
    };
    console.log(data);

    try {
      const res = (await addOfferedCourse(
        offeredCourseData
      )) as TResponse<TOfferedCourse>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
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
              <UsableSelectWithWatch
                onValueChange={setFacultyId}
                label="Course Name"
                name="course"
                options={academicCourseOptions}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                disabled={!facultyId}
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
