import { Router } from 'express'
import {
  createCategoryController,
  listCategoriesController,
  listCategoryRealEstateController
} from '../controllers/categories.controllers'
import { ensureBodyIsValidMiddleware } from '../middlewares/ensureBodyIsValid'
import { categorySchemaRequest } from '../schemas/categories.schemas'
import { ensureTokenIsValidMiddleware } from '../middlewares/ensureTokenIsValid'
import { ensureIsAdminMiddleware } from '../middlewares/ensureIsAdmin'
import { ensureCategoryExistMiddleware } from '../middlewares/ensureCategoryExist'

export const categoriesRoutes: Router = Router()

categoriesRoutes.post(
  '',
  ensureTokenIsValidMiddleware,
  ensureIsAdminMiddleware,
  ensureBodyIsValidMiddleware(categorySchemaRequest),
  ensureCategoryExistMiddleware,
  createCategoryController
)
categoriesRoutes.get('', listCategoriesController)
categoriesRoutes.get('/:id/realEstate', listCategoryRealEstateController)
