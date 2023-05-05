import { Router } from 'express'
import { createRealEstateController } from '../controllers/realEstate.controllers'
import { ensureBodyIsValidMiddleware } from '../middlewares/ensureBodyIsValid'
import { realEstateSchema } from '../schemas/realEstate.schema'
import { ensureTokenIsValidMiddleware } from '../middlewares/ensureTokenIsValid'
import { ensureIsAdminMiddleware } from '../middlewares/ensureIsAdmin'

export const realEstateRoutes: Router = Router()

realEstateRoutes.post(
  '',
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureBodyIsValidMiddleware(realEstateSchema),
  createRealEstateController
)
