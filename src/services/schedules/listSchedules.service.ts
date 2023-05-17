import { Repository } from 'typeorm'
import { RealEstate, Schedule } from '../../entities'
import { AppDataSource } from '../../data-source'
import { TScheduleArray } from '../../interfaces/schedule.interface'
import { scheduleSchema } from '../../schemas/schedules'
import { AppError } from '../../error'

export const listScheduleService = async (
  realEstateId: number
): Promise<RealEstate> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)

  const realEstate = await realEstateRepository.findOne({
    where: {
      id: realEstateId
    },
    relations: {
      schedules: {
        user: true
      },
      address: true,
      category: true
    }
  })
  if (!realEstate) {
    throw new AppError('RealEstate not found', 404)
  }

  return realEstate
}
