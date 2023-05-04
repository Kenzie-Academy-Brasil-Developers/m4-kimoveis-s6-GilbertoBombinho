import { Router } from 'express'
import { createUsersController } from '../controllers/users.controllers'
import { ensureBodyIsValidMiddleware } from '../middlewares/ensureBodyIsValid'
import { userSchemaRequest } from '../schemas/users.schemas'

export const userRoutes: Router = Router()

userRoutes.post(
  '',
  ensureBodyIsValidMiddleware(userSchemaRequest),
  createUsersController
)
