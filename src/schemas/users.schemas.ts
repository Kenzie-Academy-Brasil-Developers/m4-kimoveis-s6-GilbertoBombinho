import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  nome: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date().nullish()
})

export const userSchemaRequest = userSchema.omit({
  id: true
})

export const userSchemaResponse = userSchema.omit({
  password: true
})
