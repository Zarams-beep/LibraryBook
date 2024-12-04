import { z, ZodType } from "zod";

export type ForgotFormData= {
  password: string;
  confirmPassword: string;
};

export const forgotSchema: ZodType<ForgotFormData> = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Re-enter the password correctly",
    path: ["confirmPassword"],
  });
