import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { AppError } from '../error'
import { User } from '../entities'

export const ensureEmailExistMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User)
  const email = await userRepo.findOneBy({
    email: req.body.email
  })
  if (email) {
    throw new AppError('Email already exists', 409)
  }
  return next()
}
