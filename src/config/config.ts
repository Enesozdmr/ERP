import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env.PORT || 8000
export const DB_URL =
  process.env.DB_URL || 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma'
export const JWT_PRIVATE = process.env.JWT_PRIVATE || 'jl8rh9isdfsgsd324nzmoont8p'

