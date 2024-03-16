import { useGetAllOfferedCourseQuery } from "../../admin/studentCourseApi";
import { Button, Row } from "antd";

const StudentOfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCourseQuery(undefined);

  const singleObject = offeredCourseData?.data?.reduce((acc, item) => {
    const key = item.course.title;
    acc[key] = acc[key] || { courseTitle: key, sections: [] };

    acc[key].sections.push({
      section: item.section,
      _id: item._id,
      days: item.days,
      startTime: item.startTime,
      endTime: item.endTime,
    });

    return acc;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});
  return (
    <Row>
      {modifiedData.map((item) => {
        return (
          <div>
            <h2>Course Name: {item.courseTitle}</h2>
            <div>
              {item.sections.map((section) => {
                return (
                  <div>
                    <p>Section: {section.section}</p>
                    <div>
                      Days:{" "}
                      {section.days.map((day) => (
                        <span>{day}</span>
                      ))}
                    </div>
                    <p>Class Started: {section.startTime}</p>
                    <p>Class Ended: {section.endTime}</p>
                    <Button>Enroll Now</Button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </Row>
  );
};

export default StudentOfferedCourse;
