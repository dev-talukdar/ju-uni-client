import { Button, Row } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../../../redux/features/admin/UserManagementApi";

const PasswordChange = () => {
  const [changePassword] = useChangePasswordMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await changePassword(data);
    console.log(res);
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <UsableForm onSubmit={onSubmit}>
        <div>
          <UsableFormInput
            type="text"
            name="oldPassword"
            label="Old Password"
          />
        </div>

        <div>
          <UsableFormInput
            type="text"
            name="newPassword"
            label="New Password"
          />
        </div>

        <Button htmlType="submit">Login</Button>
      </UsableForm>
    </Row>
  );
};

export default PasswordChange;
