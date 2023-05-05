import { Request, Response } from 'express'
import { TCategory, TCategoryRequest } from '../interfaces/categories.interface'
import { createCategoryService } from '../services/categories/createCategory.service'
import { listCategoryService } from '../services/categories/listCategories.service'

export const createCategoryController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categoryData: TCategoryRequest = request.body
  const newCategory: TCategory = await createCategoryService(categoryData)
  return response.status(201).json(newCategory)
}

export const listCategoriesController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const categories = await listCategoryService()
  return response.json(categories)
}

export const listCategoryImmobileController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.json()
}
