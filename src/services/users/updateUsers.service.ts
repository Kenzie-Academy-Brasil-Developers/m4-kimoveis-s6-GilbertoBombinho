import { Repository } from 'typeorm'
import { TUserResponse, TUserUpdate } from '../../interfaces/users.interface'
import { User } from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'
import { userSchemaResponse } from '../../schemas/users.schemas'

export const updateUsersService = async (
    userData: TUserUpdate,
    userId: number
): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const userUpdate: User | null = await userRepository.findOneBy({
        id: userId,
    })

    const newUser: User = userRepository.create({
        ...userUpdate,
        ...userData,
    })
    await userRepository.save(newUser)

    const user: TUserResponse = userSchemaResponse.parse(newUser)

    return user
}
