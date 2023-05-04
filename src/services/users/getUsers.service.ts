import { Repository } from 'typeorm'
import { User } from '../../entities'
import { AppDataSource } from '../../data-source'
import { TUserResponse, TUsersArray } from '../../interfaces/users.interface'
import { userSchemaArray } from '../../schemas/users.schemas'

export const getUsersService = async (): Promise<TUsersArray> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)
  let users: TUserResponse[] | undefined
  users = await userRepository.find({})
  const usersResult: TUsersArray = userSchemaArray.parse(users)

  return usersResult
}
