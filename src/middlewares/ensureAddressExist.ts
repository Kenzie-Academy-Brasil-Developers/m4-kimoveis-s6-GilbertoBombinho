import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { AppError } from '../error'
import { RealEstate } from '../entities'

export const ensureAddressExistMiddleware = async (
  request: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
  const category = await userRepo.findOneBy({
    address: request.body.address
  })
  if (category) {
    throw new AppError('Address already exists', 409)
  }
  return next()
}