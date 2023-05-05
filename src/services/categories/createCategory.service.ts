import { TCategory, TCategoryRequest } from "../../interfaces/categories.interface"
import { Category } from "../../entities"
import { Repository } from "typeorm"
import { AppDataSource } from '../../data-source'
import { categorySchema } from "../../schemas/categories.schemas"

export const createCategoryService = async (categoryData: TCategoryRequest): Promise<TCategory> => {
  const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
  
  const category: Category = categoryRepository.create(categoryData)

  await categoryRepository.save(category)

  const categoryResult = categorySchema.parse(category)

  return categoryResult
}