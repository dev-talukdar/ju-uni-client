import { Button, Col, Divider, Flex, Form, Input, Row } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import {
  bloodGroupOptions,
  genderoptions,
} from "../../../components/constants/global";
import UsableDatePicker from "../../../components/UsableForm/UsableDatePicker";
import { useGetAllDepartmentQuery } from "../../../redux/features/admin/AcademicManagementApi";
import { useAddFacultyMutation } from "../../../redux/features/admin/UserManagementApi";

const FacultyDefaultValue = {
  faculty: {
    designation: "Lecturer",

    name: {
      firstName: "Farida",
      middleName: "Parvin",
      lastName: "Rahman",
    },

    gender: "male",
    email: "facultyd3@gmail.com",
    dateOfBirth: "1990-01-01",
    contactNo: "123",
    emergencyContactNo: "123",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    academicDepartment: "65e4668bada0f800e6af6d7f",
  },
};
// console.log(FacultyDefaultValue);

const CreateFaculty = () => {
  const [addfaculty] = useAddFacultyMutation();
  const { data: DepartmentData, isLoading: DepartmentIsLoading } =
    useGetAllDepartmentQuery(undefined);

  const createStudentDepartmentOptions = DepartmentData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const facultyData = {
      password: "faculty123",
      faculty: data.faculty,
    };

    console.log(facultyData);
    console.log(data);

    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));

    addfaculty(formData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <Divider>Personal Information</Divider>
        <UsableForm onSubmit={onSubmit} defaultValues={FacultyDefaultValue}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.designation"
                label="Designation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.name.firstName"
                label="First Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.name.lastName"
                label="Last Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                options={genderoptions}
                name="faculty.gender"
                label="Gender"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput type="text" name="faculty.email" label="email" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.contactNo"
                label="Contact No: "
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.emergencyContactNo"
                label="Emergency Contact"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                options={bloodGroupOptions}
                name="faculty.bloogGroup"
                label="Blood Group"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="faculty.image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="faculty.permanentAddress"
                label="Permanent Address"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                options={createStudentDepartmentOptions}
                disabled={DepartmentIsLoading}
                name="faculty.academicDepartment"
                label="Academic Department"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Create A Faculty</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateFaculty;
