import express from 'express'

import imageResizer from './api/imageResizer';

const routes = express.Router()
routes.get('/', (req, res) =>{
  res.send('images Api')
})

routes.use('/imageresizer', imageResizer)



export default routes;
