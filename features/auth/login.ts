import { z, ZodType } from "zod";

export type LoginFormData= {
  email: string;
  password: string;
};

export const loginSchema: ZodType<LoginFormData> = z
  .object({
    email: z.string().email('Invalid email address, try again').min(2, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  })
