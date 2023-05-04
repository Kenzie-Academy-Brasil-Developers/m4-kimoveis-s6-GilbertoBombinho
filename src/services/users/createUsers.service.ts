import { TUserRequest, TUserResponse } from "../../interfaces/users.interface"
import { User } from "../../entities"
import { Repository } from "typeorm"
import { AppDataSource } from '../../data-source'
import { userSchemaResponse } from "../../schemas/users.schemas"

export const createUsersService = async (userData: TUserRequest): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)
  
  const user: User = userRepository.create(userData)

  await userRepository.save(user)

  const userResult = userSchemaResponse.parse(user)

  return userResult
}

