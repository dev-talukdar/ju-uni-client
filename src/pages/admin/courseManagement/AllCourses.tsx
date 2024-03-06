import { useState } from "react";
import { useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagementApi";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TQueryParam } from "../../../types/global";
import { TAllCourse } from "../../../types/courseManagementType";

export type TCourseData = Pick<TAllCourse, "title">;

const AllCourses = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: courseData,
    isLoading,
    isFetching,
  } = useGetAllCoursesQuery(params);

  const tableData = courseData?.data?.map(
    ({ _id, title, prefix, code }: TAllCourse) => ({
      key: _id,
      title,
      code: `${prefix} ${code}`,
    })
  );

  const columns: TableColumnsType<TCourseData> = [
    {
      title: "Name",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Course Code",
      key: "code",
      dataIndex: "code",
    },

    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Assign Faculty</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TCourseData>["onChange"] = (
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

export default AllCourses;
