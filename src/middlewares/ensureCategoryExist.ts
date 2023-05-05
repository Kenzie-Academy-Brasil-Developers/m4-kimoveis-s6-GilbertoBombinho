import { NextFunction, Request, Response } from 'express'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'
import { AppError } from '../error'
import { Category } from '../entities'

export const ensureCategoryExistMiddleware = async (
  request: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepo: Repository<Category> = AppDataSource.getRepository(Category)
  const category = await userRepo.findOneBy({
    name: request.body.name
  })
  if (category) {
    throw new AppError('Category already exists', 409)
  }
  return next()
}