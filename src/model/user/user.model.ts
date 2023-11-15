import mongoose, { Schema } from 'mongoose'
import isEmail from 'validator/lib/isEmail'

import { User } from './user.interface'

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 50,
      required: true,
      trim: true
    },
    surname: {
      type: String,
      minLength: 2,
      maxLength: 50,
      required: true,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      validate: [isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
      get: (): undefined => undefined
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
      required: true
    }
  },
  {
    id: false,
    toJSON: {
      getters: true
    },
    toObject: {
      getters: true
    },
    timestamps: true,
    versionKey: false
  }
)

const UserModel = mongoose.model<User & mongoose.Document>('User', UserSchema)

export default UserModel