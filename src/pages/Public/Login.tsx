import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispath } from "../../redux/hooks/hooks";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import verifyToken from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
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
