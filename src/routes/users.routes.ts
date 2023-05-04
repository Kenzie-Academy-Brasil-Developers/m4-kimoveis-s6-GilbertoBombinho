import { Router } from 'express'
import {
  createUsersController,
  getUsersController
} from '../controllers/users.controllers'
import { ensureBodyIsValidMiddleware } from '../middlewares/ensureBodyIsValid'
import { userSchemaRequest } from '../schemas/users.schemas'
import { ensureEmailExistMiddleware } from '../middlewares/ensureEmailExist'
import { ensureIsAdminMiddleware } from '../middlewares/ensureIsAdmin'
import { ensureTokenIsValidMiddleware } from '../middlewares/ensureTokenIsValid'

export const userRoutes: Router = Router()

userRoutes.post(
  '',
  ensureBodyIsValidMiddleware(userSchemaRequest),
  ensureEmailExistMiddleware,
  createUsersController
)

userRoutes.get(
  '',
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  getUsersController
)
