import { z } from 'zod';

export const LoginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Please provide correct email'),

    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Invalid password'),
  }),
});

export type LoginRequest = z.infer<typeof LoginSchema>['body'];
