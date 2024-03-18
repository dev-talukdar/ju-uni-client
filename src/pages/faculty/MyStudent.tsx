import { useParams } from "react-router-dom";
import { useGetAllFacultyCourseQuery } from "../../redux/features/faculty/facultyCoursesApi";
import { Button, Table, TableColumnsType } from "antd";
import { TTableData } from "../admin/AcademicManagement/AcademicSemester";

const MyStudent = () => {
  const { registerSemesterId, courseId } = useParams();
  const { data: facultCourseyData } = useGetAllFacultyCourseQuery([
    { name: "semesterRegistration", value: registerSemesterId },
    { name: "course", value: courseId },
  ]);

  const tableData = facultCourseyData?.data?.map(({ _id, student, id }) => ({
    key: _id,
    name: `${student.name.firstName} ${student.name.middleName} ${student.name.lastName}`,
    roll: student.id,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },

    {
      title: "End Month",
      key: "roll",
      dataIndex: "roll",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];
  console.log(facultCourseyData);
  return <Table columns={columns} dataSource={tableData} />;
};

export default MyStudent;
