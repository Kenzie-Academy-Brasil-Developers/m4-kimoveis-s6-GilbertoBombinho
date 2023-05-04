import { Router } from 'express'
import { createVisitController } from '../controllers/schedules.controllers'

export const schedulesRoutes: Router = Router()

schedulesRoutes.post('', createVisitController)