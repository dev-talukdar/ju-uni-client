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
import {
  useGetAllDepartmentQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/AcademicManagementApi";
import { useAddStudentMutation } from "../../../redux/features/admin/UserManagementApi";

const StudentDefaultValue = {
  name: {
    firstName: "I am ",
    middleName: "Student",
    lastName: "Number 1",
  },
  gender: "male",

  bloogGroup: "A+",

  email: "student3@gmail.com",
  contactNo: "1235678",
  emergencyContactNo: "987-654-3210",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",

  guardian: {
    fatherName: "James Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "111-222-3333",
    motherName: "Mary Doe",
    motherOccupation: "Teacher",
    motherContactNo: "444-555-6666",
  },

  localGuardian: {
    name: "Alice Johnson",
    occupation: "Doctor",
    contactNo: "777-888-9999",
    address: "789 Pine St, Villageton",
  },

  // academicDepartment: "65b4acae3dc8d4f3ad83e416",
};

const CreateStudent = () => {
  const [addStudent] = useAddStudentMutation();
  const { data: SemesterData, isLoading: SemesterIsLoading } =
    useGetAllSemestersQuery(undefined);

  const { data: DepartmentData, isLoading: DepartmentIsLoading } =
    useGetAllDepartmentQuery(undefined, { skip: SemesterIsLoading });

  const createStudentSemesterOptions = SemesterData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const createStudentDepartmentOptions = DepartmentData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);

    addStudent(formData);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <Divider>Personal Information</Divider>
        <UsableForm onSubmit={onSubmit} defaultValues={StudentDefaultValue}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="name.firstName"
                label="First Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="name.middleName"
                label="Middle Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="name.lastName"
                label="Last Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                options={genderoptions}
                name="gender"
                label="Gender"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                options={bloodGroupOptions}
                name="bloogGroup"
                label="Blood Group"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              {/* <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => {
                  return (
                    <Form.Item label="Profile Picture">
                      <Input
                        type="file"
                        value={value?.fileName}
                        {...field}
                        onChange={(e) => onChange(e.target.files?.[0])}
                      />
                    </Form.Item>
                  );
                }}
              /> */}
              <Controller
                name="image"
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
          </Row>

          <Divider>Contact infomration</Divider>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput type="text" name="email" label="email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="contactNo"
                label="Contact No: "
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
          </Row>

          <Divider>Gurdian Information</Divider>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Ocupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact No:"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Ocupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact No:"
              />
            </Col>
          </Row>

          <Divider>Local Gurdian Information</Divider>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="localGuardian.name"
                label="Local Gurdian Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="localGuardian.occupation"
                label="Local Gurdian Ocupation"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="localGuardian.contactNo"
                label="Local GurdianContact No:"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput
                type="text"
                name="localGuardian.address"
                label="Local Gurdian Address"
              />
            </Col>
          </Row>

          <Divider> Academic infomration</Divider>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                options={createStudentSemesterOptions}
                disabled={SemesterIsLoading}
                name="admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                options={createStudentDepartmentOptions}
                disabled={DepartmentIsLoading}
                name="academicDepartment"
                label="Academic Department"
              />
            </Col>
          </Row>

          <Button htmlType="submit">Create A Student</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateStudent;
