import { Router } from 'express'
import {
  createRealEstateController,
  listRealEstateController
} from '../controllers/realEstate.controllers'
import { ensureBodyIsValidMiddleware } from '../middlewares/ensureBodyIsValid'
import { realEstateSchemaRequest } from '../schemas/realEstate.schema'
import { ensureTokenIsValidMiddleware } from '../middlewares/ensureTokenIsValid'
import { ensureIsAdminMiddleware } from '../middlewares/ensureIsAdmin'
import { ensureAddressExistMiddleware } from '../middlewares/ensureAddressExist'

export const realEstateRoutes: Router = Router()

realEstateRoutes.post(
  '',
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureBodyIsValidMiddleware(realEstateSchemaRequest),
  ensureAddressExistMiddleware,
  createRealEstateController
)

realEstateRoutes.get('', listRealEstateController)
