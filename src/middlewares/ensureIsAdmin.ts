import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'

export const ensureIsAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const token = response.locals.token
  if(token.id !== request.params.id){
    if(token.admin === false){
      throw new AppError("Insufficient Permission", 403)
    }
  }
  return next()
}