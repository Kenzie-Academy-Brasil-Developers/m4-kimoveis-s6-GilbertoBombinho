import { Request, Response } from 'express'
import { createUsersService } from '../services/users/createUsers.service'
import { TUserRequest } from '../interfaces/users.interface'

export const createUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body
  const newUser = await createUsersService(userData)
  return response.status(201).json(newUser)
}

export const getUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.json()
}

export const updateUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.json()
}

export const deleteUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  return response.json()
}
