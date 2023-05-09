import { Repository } from 'typeorm'
import { Category } from '../../entities'
import { AppDataSource } from '../../data-source'
import { TCategoryArray } from '../../interfaces/categories.interface'
import { categorySchemaArray } from '../../schemas/categories.schemas'

export const listCategoryService = async (): Promise<TCategoryArray> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category)
  let categories: TCategoryArray | undefined
  categories = await categoryRepository.find({})
  const categoryResult: TCategoryArray = categorySchemaArray.parse(categories)
  return categoryResult
}
