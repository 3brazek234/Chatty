import type { AuthChildProps } from "../../types/types";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginFormData } from "../../validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";
function LoginForm({ onSwitch }: AuthChildProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    const res = await login(data);
    if (res.data.success) {
      navigate("/chat");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.data));
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold text-dark mb-2">Login</h2>
      <p className="text-sm text-gray-500 mb-8">Enter your details</p>{" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="input">Email</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="input">Password</label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <div className="center gap-2.5 mt-3">
          <p>Don't have an account?</p>
          <span
            onClick={onSwitch}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Register
          </span>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
