import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'Field can not be empty.'),
});

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(2, 'Password must be at least 10 characters'),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords must match',
    path: ['repeatPassword'],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;
export type TLoginSchema = z.infer<typeof loginSchema>;
