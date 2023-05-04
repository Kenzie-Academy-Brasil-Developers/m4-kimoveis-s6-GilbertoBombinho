import { Router } from 'express'
import {
  createUsersController,
  deleteUsersController,
  getUsersController,
  updateUsersController
} from '../controllers/users.controllers'
import { ensureBodyIsValidMiddleware } from '../middlewares/ensureBodyIsValid'
import { userSchemaRequest, userSchemaUpdate } from '../schemas/users.schemas'
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

userRoutes.patch(
  '/:id',
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureBodyIsValidMiddleware(userSchemaUpdate),
  updateUsersController
)

userRoutes.delete('/:id', deleteUsersController)