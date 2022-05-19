import express from 'express'
import logger from '../middleware/logger'
import imageCrop from './api/crop'

const routes = express.Router()
routes.use(logger)

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello from API Image resizer')
})
routes.use('/crop', imageCrop)

export default routes
