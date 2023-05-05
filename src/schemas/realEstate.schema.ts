import { z } from 'zod'

export const realEstateSchema = z.object({
  id: z.number(),
  sold: z.boolean(),
  value: z.number(),
  size: z.number().int().positive(),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  addressId: z.number(),
  categoryId: z.number()
})

export const realEstateSchemaRequest = realEstateSchema.omit({
  id: true
})

export const realEstateSchemaArray = z.array(realEstateSchema)