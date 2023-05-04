import { Request, Response } from 'express'
import { TLoginRequest } from '../interfaces/login.interface'
import { createLoginService } from '../services/login/login.service'

export const loginController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const login: TLoginRequest = request.body
  const token = await createLoginService(login)
  return response.json({token})
}