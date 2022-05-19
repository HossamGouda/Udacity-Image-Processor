import express from 'express'
import path from 'path'
import resize from '../../utilities/resize'
import { existsSync, mkdirSync } from 'fs'

const imageCrop = express.Router()

imageCrop.get('/', async (req: express.Request, res: express.Response) => {
  const { name, width, height } = req.query
  const fileSource = path.resolve('./') + '/assets/'
  const resultPath = fileSource + 'thumbs/'
  const target = fileSource + name + '.jpg'
  const exists = (location: string): boolean => {
    return existsSync(location)
  }

  if (Object.keys(req.query).length === 0) {
    return res
      .status(200)
      .send('Please Enter filename, width and height !! no Extension needed')
  }
  if (
    !name ||
    !width ||
    !height ||
    isNaN(Number(width)) ||
    isNaN(Number(height))
  ) {
    return res.status(400).send('Error, missing parameters')
  }

  if (!exists(target)) {
    return res.status(404).send('Image not in Database')
  }
  if (!exists(resultPath)) {
    return mkdirSync(resultPath)
  }

  const outPut = resultPath + `${name}-thumbs-${width}-${height}.jpg`
  if (exists(outPut)) {
    res.sendFile(outPut)
  } else {
    await resize(target, outPut, Number(width), Number(height))
    res.sendFile(outPut)
  }
})

export default imageCrop
