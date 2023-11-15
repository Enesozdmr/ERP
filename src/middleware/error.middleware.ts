import { ValidateError } from '@tsoa/runtime'
import { NextFunction, Request, Response } from 'express'
import HttpException from '../exceptions/HttpException'

const errorMiddleware = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (error instanceof ValidateError) {
    const status = error.status || 422
    return response.status(status).json({
      message: 'Validation Failed',
      details: error.fields
    })
  }
  if (error instanceof HttpException) {
    const status = error.status || 500
    const message = error.message || 'Something went wrong'
    return response.status(status).send({
      status,
      message
    })
  }
  if (error instanceof Error) {
    if (error.name === 'ValidationError') {
      return response.status(400).json({
        message: error.message,
        error: error
      })
    }
    return response.status(500).json({
      message: 'Internal Server Error',
      error: error.message
    })
  }
  next()
}

export default errorMiddleware
