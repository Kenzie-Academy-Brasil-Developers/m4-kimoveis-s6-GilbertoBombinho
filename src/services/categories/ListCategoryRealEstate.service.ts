import { Repository } from 'typeorm'
import { Category } from '../../entities'
import { AppDataSource } from '../../data-source'

export const listCategoryRealEstateService = async (
  categoryId: number
): Promise<Category | null> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category)

  const categoriesRealEstate: Category | null = await categoryRepository
    .createQueryBuilder('categories')
    .innerJoinAndSelect(
      'categories.categoriesRealEstate',
      'categoriesRealEstate'
    )
    .innerJoinAndSelect('categoriesRealEstate.real', 'real')
    .where('categories.id = :categoryId', { categoryId })
    .getOne()

  return categoriesRealEstate
}
