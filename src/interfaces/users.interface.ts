import { z } from 'zod'
import {
    userSchema,
    userSchemaArray,
    userSchemaRequest,
    userSchemaResponse,
} from '../schemas/users.schemas'

export type TUser = z.infer<typeof userSchema>
export type TUserRequest = z.infer<typeof userSchemaRequest>
export type TUserResponse = z.infer<typeof userSchemaResponse>
export type TUsersArray = z.infer<typeof userSchemaArray>



