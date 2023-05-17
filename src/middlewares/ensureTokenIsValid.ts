import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { verify } from 'jsonwebtoken'
import { AppError } from '../error'
import 'dotenv/config'

export const ensureTokenIsValidMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  let token: string | undefined = request.headers.authorization
  if (!token) {
    throw new AppError('Missing bearer token', 401)
  }
  token = token.split(' ')[1]
  verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      throw new AppError(error.message, 401)
    }
    response.locals.token = {
      id: parseInt(decoded?.sub),
      admin: decoded.admin
    }
    return next()
  })
}



