import { z } from 'zod';

export const passwordSchema = z.object({
  title: z.string().min(4, 'Title must be at least 4 characters'),
  password: z.string().min(4, 'Password must be at least 4 characters'),
  length: z.number().min(4, 'Length must be at least 4 characters').max(128, 'Length must be at most 128 characters'),
  useUppercase: z.boolean().optional(),
  useLowercase: z.boolean().optional(),
  useNumbers: z.boolean().optional(),
  useSymbols: z.boolean().optional(),
})


export type PasswordSchemaType = z.infer<typeof passwordSchema>
