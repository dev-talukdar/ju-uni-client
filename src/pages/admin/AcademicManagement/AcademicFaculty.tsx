import { useState } from "react";
import { useGetAllFacultyQuery } from "../../../redux/features/admin/AcademicManagementApi";
import { TQueryParam } from "../../../types/global";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TAcademicFaculty } from "../../../types/academicManagementType";

export type TAcademicTableData = Pick<TAcademicFaculty, "name">;

const AcademicFaculty = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: facultyData,
    isLoading,
    isFetching,
  } = useGetAllFacultyQuery(params);

  // console.log({ isLoading, isFetching });

  const tableData = facultyData?.data?.map(({ _id, name }) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TAcademicTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Created At",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2028",
          value: "2028",
        },
        {
          text: "2029",
          value: "2029",
        },
      ],
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

  const onChange: TableProps<TAcademicTableData>["onChange"] = (
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

export default AcademicFaculty;
