import { Router } from 'express'
import { createCategoryController, listCategoriesController, listCategoryImmobileController } from '../controllers/categories.controllers'

export const categoriesRoutes: Router = Router()

categoriesRoutes.post('', createCategoryController)
categoriesRoutes.get('', listCategoriesController)
categoriesRoutes.get('/:id/realEstate', listCategoryImmobileController)