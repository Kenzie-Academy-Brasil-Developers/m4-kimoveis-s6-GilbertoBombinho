import { RealEstate } from '../../entities'
import { InsertResult, Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import {
  TRealEstate,
  TRealEstateRequest
} from '../../interfaces/realEstate.interface'

export const createRealEstateService = async (
  immobileData: TRealEstateRequest
): Promise<TRealEstate> => {
  const immobileRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)

  const immobile: InsertResult = await immobileRepository
    .createQueryBuilder()
    .insert()
    .values(immobileData)
    .returning('*')
    .execute()

  return immobile.raw[0]
}
