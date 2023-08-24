import { z } from 'zod';

export const CreateUserSchema = z.object({
  body: z.object({
    firstName: z.string({
      invalid_type_error: 'First name must be a string',
      required_error: 'First name is required',
    }),
    lastName: z.string({
      invalid_type_error: 'Last name must be a string',
      required_error: 'Last name is required',
    }),
    email: z
      .string({
        invalid_type_error: 'Email must be a string',
        required_error: 'Email is required',
      })
      .email('Please provide a valid email address'),
    password: z
      .string()
      .min(8, { message: 'Password must be minimum of 8 characters' }),
  }),
});

export type CreateUserRequest = z.infer<typeof CreateUserSchema>['body'];
