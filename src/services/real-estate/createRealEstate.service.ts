import { Address, Category, RealEstate } from '../../entities'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import {
  TRealEstate,
  TRealEstateRequest
} from '../../interfaces/realEstate.interface'
import { realEstateSchema } from '../../schemas/realEstate.schema'
import { AppError } from '../../error'

export const createRealEstateService = async (
  realEstateData: TRealEstateRequest
): Promise<any> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address)
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category)

    const categoryExist = await categoryRepository.findOneBy({
      id: realEstateData.categoryId
    })
    if(!categoryExist){
      throw new AppError('category not found', 404)
    }

  const addressCreate = addressRepository.create(realEstateData.address)
  await addressRepository.save(addressCreate)

  const realEstate: RealEstate = realEstateRepository.create({
    value: realEstateData.value,
    size: realEstateData.size,
    address: addressCreate,
    category: categoryExist
  })
  await realEstateRepository.save(realEstate)

  //const realEstateResult = realEstateSchema.parse(realEstate)
  return realEstate
}

