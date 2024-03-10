import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllOfferedCoursesQuery } from "../../../redux/features/admin/courseManagementApi";
import { TOfferedCourse } from "../../../types/courseManagementType";
import { TQueryParam } from "../../../types/global";
import { useState } from "react";

export type TOfferedCourseData = Pick<
  TOfferedCourse,
  "semesterRegistration" | "academicDepartment" | "academicFaculty" | "course"
>;

const AllOffereedCourse = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: OfferedCourseData,
    isLoading,
    isFetching,
  } = useGetAllOfferedCoursesQuery(params);
  console.log(OfferedCourseData);

  const tableData = OfferedCourseData?.data?.map((item) => ({
    semesterRegistration: item.academicSemester.name,
    academicDepartment: item.academicDepartment.name,
    academicFaculty: item.academicFaculty.name,
    course: item.course.title,
  }));

  const columns: TableColumnsType<TOfferedCourseData> = [
    {
      title: "Semester Name",
      key: "semesterRegistration",
      dataIndex: "semesterRegistration",
    },
    {
      title: "Department Name",
      key: "academicDepartment",
      dataIndex: "academicDepartment",
    },
    {
      title: "Faculty Name",
      key: "academicFaculty",
      dataIndex: "academicFaculty",
    },
    {
      title: "Course Name",
      key: "course",
      dataIndex: "course",
    },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <Button>Delete</Button>,
    },
  ];

  const onChange: TableProps<TOfferedCourseData>["onChange"] = (
    _pagination, //added underscore, because we are not using at this moment.origin no underscore
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  if (isLoading) {
    return (
      <div className="leap-frog">
        <div className="leap-frog__dot"></div>
        <div className="leap-frog__dot"></div>
        <div className="leap-frog__dot"></div>
      </div>
    );
  }

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default AllOffereedCourse;

// TODO : table e data te je id show kore , seigula ke name e convert korte Hobe
