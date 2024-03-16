import { useGetAllOfferedCourseQuery } from "../../admin/studentCourseApi";

const StudentOfferedCourse = () => {
  const { data: offeredCourseData } = useGetAllOfferedCourseQuery(undefined);

  const singleObject = offeredCourseData?.data?.reduce((acc, item) => {
    const key = item.course.title;
    acc[key] = acc[key] || { courseTitle: key, sections: [] };

    acc[key].sections.push({
      section: item.section,
      _id: item._id,
    });

    return acc;
  }, {});

  console.log(singleObject);
  return (
    <div>
      <p>this is student offered course page</p>
    </div>
  );
};

export default StudentOfferedCourse;
