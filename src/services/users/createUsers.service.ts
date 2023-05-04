import { TUser, TUserRequest, TUserResponse } from "../../interfaces/users.interface"
import { User } from "../../entities"
import { Repository } from "typeorm"
import { AppDataSource } from '../../data-source'
import { hash } from 'bcryptjs'
import { userSchemaResponse } from "../../schemas/users.schemas"

export const createUsersService = async (userData: TUserRequest): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)
  userData.password = await hash(userData.password, 10)
  const user: User = userRepository.create(userData)
  await userRepository.save(user)
  const userResult = userSchemaResponse.parse(user)
  return userResult
}

