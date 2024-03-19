import { useParams } from "react-router-dom";
import {
  useAddMarkstoStudentMutation,
  useGetAllFacultyCourseQuery,
} from "../../redux/features/faculty/facultyCoursesApi";
import { Button, Modal, Table, TableColumnsType } from "antd";
import { TTableData } from "../admin/AcademicManagement/AcademicSemester";
import { useState } from "react";
import UsableForm from "../../components/UsableForm/UsableForm";
import UsableFormInput from "../../components/UsableForm/UsableFormInput";

const MyStudent = () => {
  const { registerSemesterId, courseId } = useParams();
  const { data: facultCourseyData } = useGetAllFacultyCourseQuery([
    { name: "semesterRegistration", value: registerSemesterId },
    { name: "course", value: courseId },
  ]);

  const tableData = facultCourseyData?.data?.map(
    ({ _id, student, semesterRegistration, offeredCourse }) => ({
      key: _id,
      name: `${student.name.firstName} ${student.name.middleName} ${student.name.lastName}`,
      roll: student.id,
      semesterRegistration: semesterRegistration._id,
      student: student._id,
      offeredCourse: offeredCourse._id,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },

    {
      title: "Roll Number",
      key: "roll",
      dataIndex: "roll",
    },
    {
      title: "Action",
      key: "x",
      render: (item) => {
        return (
          <div>
            <AddMarksModal studentInfo={item} />
          </div>
        );
      },
    },
  ];
  console.log(facultCourseyData);
  return <Table columns={columns} dataSource={tableData} />;
};

const AddMarksModal = ({ studentInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addMark] = useAddMarkstoStudentMutation();

  const handleSubmit = async (data) => {
    const studentMarks = {
      semesterRegistration: studentInfo.semesterRegistration,
      offeredCourse: studentInfo.offeredCourse,
      student: studentInfo.student,
      courseMarks: {
        classTest1: Number(data.classTest1),
        midTerm: Number(data.midTerm),
        classTest2: Number(data.classTest2),
        finalTerm: Number(data.finalTerm),
      },
    };
    console.log(studentMarks);
    const res = await addMark(studentMarks);
    console.log(res);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Update Marks</Button>
      <Modal
        title="Please choose from list"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <UsableForm onSubmit={handleSubmit}>
          <UsableFormInput type="text" name="classTest1" label="Class Test 1" />
          <UsableFormInput type="text" name="classTest2" label="Class Test 2" />
          <UsableFormInput type="text" name="midTerm" label="Mid Term" />
          <UsableFormInput type="text" name="finalTerm" label="Final Term" />
          <Button htmlType="submit">Submit</Button>
        </UsableForm>
      </Modal>
    </>
  );
};

export default MyStudent;
