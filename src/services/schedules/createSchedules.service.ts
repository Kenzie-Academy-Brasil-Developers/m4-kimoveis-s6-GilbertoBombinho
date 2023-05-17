import { RealEstate, Schedule, User } from '../../entities'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TScheduleRequest } from '../../interfaces/schedule.interface'
import { AppError } from '../../error'

export const createScheduleService = async (
  scheduleData: TScheduleRequest,
  tokenId: number
): Promise<Object> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate)
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule)
  const userRepo: Repository<User> = AppDataSource.getRepository(User)

  const user = await userRepo.findOneBy({
    id: tokenId
  })
  if (!user) {
    throw new AppError('User not found', 404)
  }

  const realEstateExist = await realEstateRepository.findOneBy({
    id: scheduleData.realEstateId
  })
  if (!realEstateExist) {
    throw new AppError('RealEstate not found', 404)
  }

  const [hour, minutes] = scheduleData.hour.split(':')
  if (parseInt(hour) < 8 || parseInt(hour) > 18) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM', 400)
  }
  const day = new Date(scheduleData.date).getDay()
  if (day === 0 || day === 6) {
    throw new AppError('Invalid date, work days are monday to friday', 400)
  }

  const realEstateQuery = await scheduleRepository
    .createQueryBuilder('schedule')
    .where('schedule.realEstateId = :realEstateId', {
      realEstateId: scheduleData.realEstateId
    })
    .andWhere('schedule.hour = :hour', { hour: scheduleData.hour })
    .andWhere('schedule.date = :date', { date: scheduleData.date })
    .getOne()

  if (realEstateQuery) {
    throw new AppError(
      'Schedule to this real estate at this date and time already exists',
      409
    )
  }

  const scheduleQuery = await scheduleRepository
    .createQueryBuilder('schedule')
    .where('schedule.userId = :userId', { userId: tokenId })
    .andWhere('schedule.hour = :hour', { hour: scheduleData.hour })
    .andWhere('schedule.date = :date', { date: scheduleData.date })
    .getOne()

  if (scheduleQuery) {
    throw new AppError(
      'User schedule to this real estate at this date and time already exists',
      409
    )
  }

  

  const schedule: Schedule = scheduleRepository.create(scheduleData)
  await scheduleRepository.save(schedule)
  return {
    message: 'Schedule created'
  }
}
