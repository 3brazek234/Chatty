import { toast } from "sonner";
import type { loginRequest, signupRequest } from "../types/types";
import api from "../utils/api";

export const login = async (data: loginRequest) => {
  try {
    const res = await api.post("/login", data);
    if (res.status === 201 && res.data.success) {
      toast.success("User logged in successfully!");
    }
    if (res.status === 400 && !res.data.success) {
      toast.error(res.data.message);
    }

    return res;
  } catch (err) {
    toast.error("User login failed");
  }
};
export const signUp = async (data: signupRequest) => {
  try {
    const res = await api.post("/register", data);
    if (res.status === 201 && res.data.success) {
    } else {
      toast.error(res.data.message);
    }
    return res.data;
  } catch (err) {
    console.log(err);
    toast.error("User registration failed");
  }
};
