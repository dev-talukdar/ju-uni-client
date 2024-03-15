import { useGetAllOfferedCourseQuery } from "../../admin/studentCourseApi";

const StudentOfferedCourse = () => {
  const { data } = useGetAllOfferedCourseQuery(undefined);
  console.log(data);
  return (
    <div>
      <p>this is student offered course page</p>
    </div>
  );
};

export default StudentOfferedCourse;
