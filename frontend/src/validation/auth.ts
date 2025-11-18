import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Full name is too short" }),
  username: z
    .string()
    .regex(/^[a-z0-0_]+$/, {
      message:
        "Username can only contain lowercase letter, numbers, and underscores",
    })
    .min(3, { message: "Username is too short" })
    .max(10, {
      message: "Username is too long",
    }),
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password is too short" }),
});
export type RegisterFormData = z.infer<typeof registerSchema>;
