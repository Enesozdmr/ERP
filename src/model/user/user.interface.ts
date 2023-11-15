import { OId } from '../../types/objectId'

export interface User {
  _id: OId
  role: "admin" | "user"
  name: string
  surname: string
  email: string
  password: string
  createdAt: any
  updatedAt: any
}

export interface UserPostParams {
  role: "admin" | "user"
  name: string
  surname: string
  email: string
  password: string
}

export interface UserSendParams {
  _id: OId
  name: string
  surname: string
}

export interface UserUpdateParams {
  name: string
  surname: string
}
