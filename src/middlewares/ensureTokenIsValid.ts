import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'
import { verify } from 'jsonwebtoken'

export const ensureTokenIsValidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  let token = request.headers.authorization
  if (!token) {
    throw new AppError('Token is Missing', 401)
  }
  token = token.split(' ')[1]
  verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401)
    }
    response.locals.token = {
      id: decoded?.sub,
      admin: decoded.admin
    }
    return next()
  })
}