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
import { ensureCorrectTokenMiddleware } from '../middlewares/ensureCorrectToken'
import { ensureIdExistMiddleware } from '../middlewares/ensureIdExist'

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
  ensureIdExistMiddleware,
  ensureTokenIsValidMiddleware,
  ensureCorrectTokenMiddleware,
  ensureBodyIsValidMiddleware(userSchemaUpdate),
  updateUsersController
)

userRoutes.delete(
  '/:id',
  ensureIdExistMiddleware,
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  deleteUsersController
)
