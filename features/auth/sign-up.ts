import { z, ZodType } from "zod";

export type SignUpFormData= {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  role: string;
  saveDetails?: boolean;
};

export const signUpSchema: ZodType<SignUpFormData> = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address, try again').min(2, 'Email is required'),
    phoneNumber: z.string().min(1, 'Phone number is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm password is required'),
    role: z.string().min(1, 'Role is required'),
    saveDetails: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Re-enter the password correctly",
    path: ["confirmPassword"],
  });
