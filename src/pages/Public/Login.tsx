import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispath } from "../../redux/hooks/hooks";
import { setUser } from "../../redux/features/auth/authSlice";
import verifyToken from "../../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispath();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data) => {
    const userInformation = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInformation).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(
      setUser({
        user: user,
        token: res.data.accessToken,
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Your ID</label>
          <input {...register("id")} />
        </div>

        <div>
          <label>Password</label>
          <input {...register("password")} />
        </div>

        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
