import { Router } from 'express'
import { createSchedulesController } from '../controllers/schedules.controllers'

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', createSchedulesController)