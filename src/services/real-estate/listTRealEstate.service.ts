import { Repository } from 'typeorm'
import { Address, RealEstate } from '../../entities'
import { AppDataSource } from '../../data-source'
import { TRealEstateArray } from '../../interfaces/realEstate.interface'

export const listRealEstateService = async (): Promise<TRealEstateArray> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)
  let realEstate: any | undefined
  realEstate = await realEstateRepository.find({
    relations:{
      address: true
    }
  })
  return realEstate
}
