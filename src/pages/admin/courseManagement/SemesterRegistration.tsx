import { FieldValues, SubmitHandler } from "react-hook-form";
import UsableForm from "../../../components/UsableForm/UsableForm";
import { Button, Col, Flex, Row } from "antd";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import {
  courseStatus,
  creditOptions,
} from "../../../components/constants/global";
import { toast } from "sonner";
import UsableDatePicker from "../../../components/UsableForm/UsableDatePicker";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/AcademicManagementApi";
import { useAddRegisteredSemesterMutation } from "../../../redux/features/admin/courseManagementApi";
import { TResponse } from "../../../types/global";
import { TAcademicSemester } from "../../../types/academicManagementType";

const SemesterRegistration = () => {
  const [addSemester] = useAddRegisteredSemesterMutation();
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Semester is now creating ...");
    const semesterData = {
      ...data,
    };
    console.log(semesterData);

    try {
      const res = (await addSemester(
        semesterData
      )) as TResponse<TAcademicSemester>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("semester created successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <UsableForm onSubmit={onSubmit}>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Semester Name"
                name="academicSemester"
                options={academicSemesterOptions}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Status"
                name="status"
                options={courseStatus}
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableDatePicker label="Start Date" name="startDate" />
            </Col>
          </Row>

          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableDatePicker label="End Date" name="endDate" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Minimum Credit"
                name="minCredit"
                options={creditOptions}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormSelect
                label="Maximum Credit"
                name="maxCredit"
                options={creditOptions}
              />
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
