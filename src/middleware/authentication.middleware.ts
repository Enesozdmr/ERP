import express from 'express'
import jwt from 'jsonwebtoken'

import UserModel from '../model/user/user.model'
import { User } from './../model/user/user.interface'
import { JWT_PRIVATE } from '../config/config'
import UnauthorizedException from '../exceptions/UnauthorizedException'

export const expressAuthentication = async (
  request: express.Request,
  securityName: string,
  scopes?: string[]
): Promise<any> => {
  if (securityName === 'jwt') {
    const token = request.header('x-auth')
    if (!token) {
      throw new UnauthorizedException('No token provided')
    }
    let decoded: User
    try {
      decoded = jwt.verify(token, JWT_PRIVATE) as User
    } catch (error) {
      throw new UnauthorizedException('Invalid Token')
    }
    const user = await UserModel.findById(decoded._id)
    if (!user) {
      throw new UnauthorizedException()
    }
    console.log('user.role: ', user.role)
    console.log('scopes: ', scopes)
    if (scopes && scopes.length > 0 && !scopes.includes(user.role)) {
      throw new UnauthorizedException(
        'User is unauthorized to perform this action.'
      )
    }
    return user
  }
}
