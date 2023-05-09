import { z } from 'zod'
import { addressSchema, addressSchemaRequest } from './address.schema'
import { categorySchema, categorySchemaRequest } from './categories.schemas'

export const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().positive()),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
  category: categorySchema
})

export const realEstateSchemaRequest = z.object({
  value: z.string().or(z.number().positive()),
  size: z.number().int().positive(),
  address: addressSchemaRequest,
  categoryId: z.number()
})

export const realEstateSchemaArray = z.array(realEstateSchema)
