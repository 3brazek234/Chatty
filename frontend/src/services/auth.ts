import { toast } from "sonner";
import type { loginRequest, signupRequest } from "../types/types";
import api from "../utils/api";

export const login = async (data: loginRequest) => {
  try {
    const res = await api.post("/login", data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const signUp = async (data: signupRequest) => {
  try {
    const res = await api.post("/register", data);
    if (res.status === 201 && res.data.success) {
      toast.success("User registered successfully! You can now login");
    } else {
      toast.error(res.data.message);
    }
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("User registration failed");
  }
};
