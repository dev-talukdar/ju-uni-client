import { Col, Flex } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",
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

    admissionSemester: "65bb60ebf71fdd1add63b1c0",
    academicDepartment: "65b4acae3dc8d4f3ad83e416",
  },
};

const CreateStudent = () => {
  const onSubmit = () => {
    console.log(onSubmit);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <UsableForm onSubmit={onSubmit}>
          <UsableFormInput type="text" name="name" label="Name" />
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateStudent;
