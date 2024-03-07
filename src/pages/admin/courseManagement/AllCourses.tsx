import { useState } from "react";
import {
  useAssignFacultiesMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagementApi";
import { Button, Modal, Table, TableColumnsType, TableProps } from "antd";
import { TQueryParam } from "../../../types/global";
import { TCourses } from "../../../types/courseManagementType";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/UserManagementApi";

export type TCourseData = Pick<TCourses, "title">;

const AllCourses = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: courseData,
    isLoading,
    isFetching,
  } = useGetAllCoursesQuery(params);

  const tableData = courseData?.data?.map(
    ({ _id, title, prefix, code }: TCourses) => ({
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
      render: (item) => {
        return <AddFacultyModal facultyInformation={item} />;
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

//modal started from here :
const AddFacultyModal = ({ facultyInformation }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  const [addfaculties] = useAssignFacultiesMutation();

  const createFacultyOptions = facultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const handleSubmit = (data) => {
    const facultyData = {
      courseId: facultyInformation.key,
      data,
    };
    addfaculties(facultyData);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Please choose from list"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <UsableForm onSubmit={handleSubmit}>
          <UsableFormSelect
            mode="multiple"
            options={createFacultyOptions}
            name="faculties"
            label="Faculty"
          />
          <Button htmlType="submit">Submit</Button>
        </UsableForm>
      </Modal>
    </>
  );
};

export default AllCourses;

//TODO need to fix these 2 type error from this page
