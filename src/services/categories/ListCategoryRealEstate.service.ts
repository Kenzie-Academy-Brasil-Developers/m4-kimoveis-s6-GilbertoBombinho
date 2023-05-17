import { Repository } from 'typeorm'
import { Category } from '../../entities'
import { AppDataSource } from '../../data-source'
import { AppError } from '../../error'

export const listCategoryRealEstateService = async (
  categoryId: number
): Promise<Category | null> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category)

  const categoriesRealEstate: Category | null = await categoryRepository.findOne({
    where:{
      id: categoryId
    },
    relations: {
      realEstate: true
    }
  })

  if(!categoriesRealEstate){
    throw new AppError('Category not found', 404)
  }

  return categoriesRealEstate
}
