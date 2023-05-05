import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { AppError } from '../error'
import { User } from '../entities'

export const ensureIdExistMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)
  const Id = await userRepo.findOneBy({
    id: parseInt(request.params.id)
  })
  if (!Id) {
    throw new AppError('User not found', 404)
  }
  return next()
}
