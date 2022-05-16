import express from 'express'
import imageResizer from './api/imageResizer'
import logger from '../middleware/logger'

const routes = express.Router()
routes.use(logger)

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('Welcome to Image API resizer')
})

routes.use('/resize', imageResizer)

export default routes
