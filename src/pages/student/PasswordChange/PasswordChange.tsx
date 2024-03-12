import { Button, Row } from "antd";
import UsableForm from "../../../components/UsableForm/UsableForm";
import UsableFormInput from "../../../components/UsableForm/UsableFormInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../../../redux/features/admin/UserManagementApi";
import { TResponse } from "../../../types/global";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const PasswordChange = () => {
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = (await changePassword(data)) as TResponse<any>;
    console.log(res?.data?.success);
    if (res?.data?.success) {
      dispatch(logout());
      navigate("/login");
    }
  };
  return (
    <div>
      <p
        style={{
          marginTop: "30px",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "semibold",
          display: "flex",
        }}
      >
        Please change your password before continue{" "}
      </p>
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
    </div>
  );
};

export default PasswordChange;
