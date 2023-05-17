import { z } from 'zod'
import { realEstateSchema } from './realEstate.schema'
import { userSchema } from './users.schemas'

export const scheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstate: realEstateSchema,
  user: userSchema
})

export const scheduleSchemaRequest = scheduleSchema
  .omit({
    id: true,
    user: true,
    realEstate: true
  })
  .extend({ realEstateId: z.number() })

export const scheduleSchemaArray = z.array(scheduleSchema)
