import { useState } from "react";
import { useGetAllDepartmentQuery } from "../../../redux/features/admin/AcademicManagementApi";
import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TQueryParam } from "../../../types/global";
import { TAcademicDepartment } from "../../../types/academicManagementType";

export type TAcademicDeptTableData = Pick<
  TAcademicDepartment,
  "name" | "academicFaculty"
>;

const AcademicDepartment = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: departmentData,
    isLoading,
    isFetching,
  } = useGetAllDepartmentQuery(params);

  // console.log({ isLoading, isFetching });
  // TODO : Kokon department create hoise , eta fix kora lagbe

  const tableData = departmentData?.data?.map(
    ({ _id, name, academicFaculty }) => ({
      key: _id,
      name,
      academicFaculty,
    })
  );

  const columns: TableColumnsType<TAcademicDeptTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Created At",
      key: "year",
      dataIndex: "year",
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

  const onChange: TableProps<TAcademicDeptTableData>["onChange"] = (
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

export default AcademicDepartment;
