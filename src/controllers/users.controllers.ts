import { Request, Response } from 'express'
import { createUsersService } from '../services/users/createUsers.service'
import {
  TUserRequest,
  TUserResponse,
  TUserUpdate
} from '../interfaces/users.interface'
import { getUsersService } from '../services/users/getUsers.service'
import { updateUsersService } from '../services/users/updateUsers.service'
import { deleteUsersService } from '../services/users/deleteUsers.service'

export const createUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserRequest = request.body
  const newUser: TUserResponse = await createUsersService(userData)
  return response.status(201).json(newUser)
}

export const getUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const users = await getUsersService()
  return response.json(users)
}

export const updateUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userData: TUserUpdate = request.body
  const userId: number = parseInt(request.params.id)
  const newUserData: TUserResponse = await updateUsersService(userData, userId)
  return response.json(newUserData)
}

export const deleteUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = parseInt(request.params.id)

  await deleteUsersService(userId)

  return response.status(204).send()
}
