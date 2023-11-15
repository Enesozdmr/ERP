import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import serveStatic from 'serve-static'
import path from 'path'

import { DB_URL, PORT } from '../config/config'
import { RegisterRoutes } from '../../routes'
import swaggerDocument from '../../swagger/swagger.json'
import errorMiddleware from '../middleware/error.middleware'

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.connectToTheDatabase()
    this.initializeMiddlewares()
    this.initializeRoutes()
    this.initializeApiDocs()
    this.initializeErrorHandling()
  }

  public listen() {
    this.app.listen(PORT, () => {
      console.log(`App listening on the port ${PORT}`)
    })
  }

  private initializeMiddlewares() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended:true}))
    this.app.use(serveStatic(path.join(__dirname, '../../public')))
    this.app.use(serveStatic(path.join(__dirname, '../../swagger')))
  }

  private initializeRoutes() {
    RegisterRoutes(this.app)
  }

  private initializeApiDocs() {
    this.app.use(
      '/api-docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument, {
        swaggerOptions: {}
      })
    )
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }

  private connectToTheDatabase() {
    mongoose
      .connect(DB_URL)
      .then(() => {
        console.log('Connected to DB')
      })
      .catch((e) => {
        console.log(e)
        console.log('DB error')
      })
  }
}

export default App
