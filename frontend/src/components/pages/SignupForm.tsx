import type { AuthChildProps } from "../../types/types";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterFormData } from "../../validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUp } from "../../services/auth";
import { toast } from "sonner";

function SignupForm({ onSwitch }: AuthChildProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    const res = await signUp(data);
    if (res.success) {
      toast.success("User registered successfully! You can now login");
      onSwitch();
    }
    if (res.message === "User is existing, try Login") {
      onSwitch();
    }
  };
  return (
    <>
      <h2 className="text-2xl font-bold text-dark mb-2">Create Your Account</h2>
      <p className="text-sm text-gray-500 mb-8">Enter your details</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="input">Full Name</label>
          <input
            type="text"
            {...register("fullName")}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.fullName && (
            <p className="text-red-500">{errors.fullName.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="input">Username</label>
          <input
            type="text"
            {...register("username")}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>
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
          Register
        </button>
        <div className="center gap-2.5 mt-3">
          <p>Already have an account?</p>
          <span
            onClick={onSwitch}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login
          </span>
        </div>
      </form>
    </>
  );
}

export default SignupForm;
