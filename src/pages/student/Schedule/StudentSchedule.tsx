import { useGetAllEnrolledCourseQuery } from "../../../redux/features/admin/studentCourseApi";

const StudentSchedule = () => {
  const { data } = useGetAllEnrolledCourseQuery(undefined);
  console.log(data);
  return (
    <div>
      {data?.data?.map((item) => {
        return (
          <div style={{ border: "solid #d4d4d4 1px", padding: "10px" }}>
            <div>Course Name: {item.course.title}</div>
            <div>Dept. Name : {item.academicDepartment.name}</div>
            <div>Faculty Name : {item.academicFaculty.name}</div>
            <div>Section: {item.offeredCourse.section}</div>
            <div>
              Days:{" "}
              {item.offeredCourse.days.map((day, index) => (
                <span key={index}>
                  {day} {index !== item.offeredCourse.days.length - 1 && ""}
                </span>
              ))}
            </div>
            <div>Starting Time: {item.offeredCourse.startTime}</div>
            <div>Status: {item.semesterRegistration.status}</div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentSchedule;
