import { NextFunction, Request, Response } from 'express'
import { ZodTypeAny } from 'zod'

export const ensureBodyIsValidMiddleware =
  (schema: ZodTypeAny) =>
  (request: Request, response: Response, next: NextFunction) => {
    const validatedData = schema.parse(request.body)
    request.body = validatedData
    return next()
  }
