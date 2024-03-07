import { Button, Modal } from "antd";
import { useState } from "react";
import UsableForm from "../UsableForm/UsableForm";
import UsableFormSelect from "../UsableForm/UsableFormSelect";
import { useGetAllFacultiesQuery } from "../../redux/features/admin/UserManagementApi";

const AddFacultyModal = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultiesData } = useGetAllFacultiesQuery(undefined);
  console.log(facultiesData);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const createFacultyOptions = facultiesData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Button onClick={showModal}>Add Faculty</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk}>
        <UsableForm onSubmit={handleSubmit}>
          <UsableFormSelect
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

export default AddFacultyModal;

//TODO I need to work on it
