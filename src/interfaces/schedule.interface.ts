import { z } from 'zod'
import {
  scheduleSchema,
  scheduleSchemaRequest,
  scheduleSchemaArray
} from '../schemas/schedules'

export type TSchedule = z.infer<typeof scheduleSchema>
export type TScheduleRequest = z.infer<typeof scheduleSchemaRequest>
export type TScheduleArray = z.infer<typeof scheduleSchemaArray>