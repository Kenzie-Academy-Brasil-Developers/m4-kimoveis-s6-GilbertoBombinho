import { z } from 'zod'

export const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  password: z.string().max(120),
  admin: z.boolean().nullish(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish()
})

export const userSchemaRequest = userSchema.omit({
  id: true, 
  createdAt: true,
  updatedAt: true,
  deletedAt: true
})

export const userSchemaResponse = userSchema.omit({
  password: true
})

export const userSchemaUpdate = userSchema.partial().omit({ id: true, admin: true })

export const userSchemaArray = z.array(userSchemaResponse)
