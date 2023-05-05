import { z } from 'zod'
import {
  realEstateSchema, realEstateSchemaRequest,realEstateSchemaArray
} from '../schemas/realEstate.schema'

export type TRealEstate = z.infer<typeof realEstateSchema>
export type TRealEstateRequest = z.infer<typeof realEstateSchemaRequest>
export type TRealEstateArray = z.infer<typeof realEstateSchemaArray>
