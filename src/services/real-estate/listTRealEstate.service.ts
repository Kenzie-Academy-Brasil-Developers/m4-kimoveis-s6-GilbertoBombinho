// import { Repository } from 'typeorm'
// import { RealEstate } from '../../entities'
// import { AppDataSource } from '../../data-source'
// import { TRealEstateArray } from '../../interfaces/realEstate.interface'
// import { realEstateSchemaArray } from '../../schemas/realEstate.schema'

// export const listRealEstateService = async (): Promise<TRealEstateArray> => {
//   //export const listRealEstateService = async (): Promise<RealEstate[]> => {
//   const realEstateRepository: Repository<RealEstate> =
//     AppDataSource.getRepository(RealEstate)
//   let realEstates: TRealEstateArray | undefined
//   realEstates  = await realEstateRepository.find({})
//   const realEstateResult: TRealEstateArray =
//     realEstateSchemaArray.parse(realEstates)
//   return realEstateResult
// }
