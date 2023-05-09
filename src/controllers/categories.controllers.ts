import { Request, Response } from 'express'
import { TCategory, TCategoryRequest } from '../interfaces/categories.interface'
import { createCategoryService } from '../services/categories/createCategory.service'
import { listCategoryService } from '../services/categories/listCategories.service'
import { listCategoryRealEstateService } from '../services/categories/ListCategoryRealEstate.service'

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

export const listCategoryRealEstateController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const realEstateId: number = parseInt(request.params.id)
  const categoryRealEstate = await listCategoryRealEstateService(realEstateId)
  return response.json(categoryRealEstate)
}
