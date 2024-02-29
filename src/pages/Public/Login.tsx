import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispath } from "../../redux/hooks/hooks";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import verifyToken from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UsableForm from "../../components/UsableForm/UsableForm";
import UsableFormInput from "../../components/UsableForm/UsableFormInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();

  const defaultValues = {
    id: "A-0001",
    password: "admin123",
  };
  console.log(defaultValues);
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    // console.log(data);
    const toastId = toast.loading(" Please wait ...");

    try {
      const userInformation = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInformation).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <UsableForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <div>
          <UsableFormInput type="text" name="id" label="Your ID" />
        </div>

        <div>
          <UsableFormInput type="text" name="password" label="Your password" />
        </div>

        <Button htmlType="submit">Login</Button>
      </UsableForm>
    </Row>
  );
};

export default Login;
