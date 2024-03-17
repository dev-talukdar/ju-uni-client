import { useGetAllOfferedCourseQuery } from "../../admin/studentCourseApi";
import { Button, Col, Row } from "antd";

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
    <Row gutter={[0, 20]}>
      {modifiedData.map((item) => {
        return (
          <Col
            span={24}
            style={{ border: "solid #d4d4d4 2px", padding: "10px" }}
          >
            <h2>Course Name: {item.courseTitle}</h2>
            <div>
              {item.sections.map((section) => {
                return (
                  <Row
                    justify="space-between"
                    align="middle"
                    style={{ borderTop: "solid #d4d4d4 2px" }}
                  >
                    <Col span={5}>Section: {section.section}</Col>
                    <Col span={5}>
                      Days:{" "}
                      {section.days.map((day) => (
                        <span>{day}</span>
                      ))}
                    </Col>
                    <Col span={5}>Class Started: {section.startTime}</Col>
                    <Col span={5}>Class Ended: {section.endTime}</Col>
                    <Button>Enroll Now</Button>
                  </Row>
                );
              })}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default StudentOfferedCourse;
