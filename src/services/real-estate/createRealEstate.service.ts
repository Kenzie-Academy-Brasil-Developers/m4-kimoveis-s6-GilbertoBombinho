import { RealEstate } from '../../entities'
import { InsertResult, Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import {
  TRealEstate,
  TRealEstateRequest
} from '../../interfaces/realEstate.interface'
import { realEstateSchema } from '../../schemas/realEstate.schema'

// export const createRealEstateService = async (
//   realEstateData: TRealEstateRequest
// ): Promise<TRealEstate> => {
//   const realEstateRepository: Repository<RealEstate> =
//     AppDataSource.getRepository(RealEstate)

//   const realEstate: RealEstate = realEstateRepository.create()

//   await realEstateRepository.save(realEstate)

//   const realEstateResult = realEstateSchema.parse(realEstate)

//   return realEstateResult
// }

export const createRealEstateService = async (
  immobileData: TRealEstateRequest
): Promise<TRealEstate> => {
  const immobileRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)

  const immobile: InsertResult = await immobileRepository
    .createQueryBuilder()
    .insert()
    //.values(immobileData)
    .returning('*')
    .execute()

  return immobile.raw[0]
}
