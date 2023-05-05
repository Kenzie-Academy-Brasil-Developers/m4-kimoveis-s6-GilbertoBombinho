import { Repository } from 'typeorm'
import { TLoginRequest } from '../../interfaces/login.interface'
import { User } from '../../entities/user.entity'
import { AppDataSource } from '../../data-source'
import { AppError } from '../../error'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export const createLoginService = async (
  loginRequest: TLoginRequest
): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)
  const user: User | null = await userRepository.findOne({
    where: {
      email: loginRequest.email
    }
  })

  if (!user) {
    throw new AppError('Invalid credentials', 401)
  }

  const password = await compare(loginRequest.password, user.password)

  if (!password) {
    throw new AppError('Invalid credentials', 401)
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    expiresIn: '10D',
    subject: String(user.id)
    //armazena informações no token
  })

  return token
}
