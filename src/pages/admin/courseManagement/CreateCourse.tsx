import { FieldValues, SubmitHandler } from "react-hook-form";
import UsableForm from "../../../components/UsableForm/UsableForm";
import { Button, Col, Flex, Row } from "antd";
import UsableFormSelect from "../../../components/UsableForm/UsableFormSelect";
import { toast } from "sonner";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/features/admin/courseManagementApi";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { TResponse } from "../../../types/global";
import { TCourses } from "../../../types/courseManagementType";

const CreateCourse = () => {
  const [CreateCourse] = useAddCourseMutation();
  const { data: courses } = useGetAllCoursesQuery(undefined);

  const preRequisiteCoursesOptions = courses?.data?.map((item: TCourses) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Course is now creating ...");
    console.log(data);
    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      isDeleted: false,
      preRequisiteCourses: data.preRequisiteCourses
        ? data?.preRequisiteCourses.map((item: TCourses) => ({
            course: item,
            isDeleted: false,
          }))
        : [],
    };
    console.log(courseData);

    try {
      const res = (await CreateCourse(courseData)) as TResponse<TCourses>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Course created successfully", { id: toastId });
      }
    } catch (err) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={24}>
        <UsableForm onSubmit={onSubmit}>
          <Row gutter={8} justify="center">
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <UsableFormInput type="text" name="title" label="Title" />
              <UsableFormInput type="text" name="prefix" label="Prefix" />
              <UsableFormInput type="text" name="code" label="Code" />
              <UsableFormInput type="text" name="credits" label="Credits" />
              <UsableFormSelect
                mode="multiple"
                options={preRequisiteCoursesOptions}
                name="preRequisiteCourses"
                label="Pre Requisite Courses"
              />
            </Col>
          </Row>

          <Row gutter={8} justify="center">
            <Button htmlType="submit">Submit</Button>
          </Row>
        </UsableForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
