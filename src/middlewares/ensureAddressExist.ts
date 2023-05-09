import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { AppError } from '../error'
import { Address } from '../entities'

export const ensureAddressExistMiddleware = async (
  request: Request,
  res: Response,
  next: NextFunction
) => {
  const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)
  const address = await addressRepo.findOneBy({
    ...request.body.address, 
    number: request.body.address.number || ''
  })
  if (address) {
    throw new AppError('Address already exists', 409)
  }
  return next()
}