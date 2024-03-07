import { Button, Table, TableColumnsType, TableProps } from "antd";
import { TFaculty } from "../../../types/userManagementType";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/UserManagementApi";
export type TTableData = Pick<TFaculty, "name" | "designation" | "email">;

const AllFaculty = () => {
  const { data: facultyData } = useGetAllFacultiesQuery(undefined);
  console.log(facultyData);

  const tableData = facultyData?.data?.map(
    ({ _id, name, designation, email }) => ({
      key: _id,
      name: `${name.firstName} ${name.middleName} ${name.lastName}`,
      designation,
      email,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Degignation",
      key: "designation",
      dataIndex: "designation",
    },
    {
      title: "Email",
      key: "email",
      dataIndex: "email",
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

  const onChange: TableProps<TTableData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default AllFaculty;

// TODO data source keno error dei, eta debug korte hobe
