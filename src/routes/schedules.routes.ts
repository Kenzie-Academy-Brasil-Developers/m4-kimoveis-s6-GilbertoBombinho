import { Router } from 'express'
import { createSchedulesController } from '../controllers/schedules.controllers'
import { listSchedulesController } from '../controllers/schedules.controllers'
import { ensureTokenIsValidMiddleware } from '../middlewares/ensureTokenIsValid'
import { ensureIsAdminMiddleware } from '../middlewares/ensureIsAdmin'
import { ensureBodyIsValidMiddleware } from '../middlewares/ensureBodyIsValid'
import { scheduleSchemaRequest } from '../schemas/schedules'

export const schedulesRoutes: Router = Router()

schedulesRoutes.post(
  '',
  ensureTokenIsValidMiddleware,
  ensureBodyIsValidMiddleware(scheduleSchemaRequest),
  createSchedulesController
)
schedulesRoutes.get(
  '/realEstate/:id',
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  listSchedulesController
)
