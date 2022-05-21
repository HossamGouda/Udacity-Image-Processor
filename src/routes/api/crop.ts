import { Request, Response, Router } from 'express'
import path from 'path'
import resize from '../../utilities/resize'
import { existsSync, mkdirSync } from 'fs'

const imageCrop = Router()

imageCrop.get('/', async (req: Request, res: Response): Promise<void> => {
  const { name, width, height } = req.query
  const fileSource: string = path.resolve('./') + '/assets/'
  const resultPath: string = fileSource + 'thumbs/'
  const target: string = fileSource + name + '.jpg'
  const exists = (location: string): boolean => {
    return existsSync(location)
  }
  const outPut: string = resultPath + `${name}-thumbs-${width}-${height}.jpg`

  try {
    if (Object.keys(req.query).length === 0) {
      res
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
      res.status(400).send('Error, missing parameters')
    }
    if (Number(width) === 0 || Number(height) === 0) {
      res
        .status(400)
        .send('Error, Width and height values cant equal zero or letters')
    }

    if (!exists(target)) {
      res.status(404).send('Image not in Database')
    }
    if (!exists(resultPath)) {
      return mkdirSync(resultPath)
    }
    if (exists(outPut)) {
      res.sendFile(outPut)
    } else {
      await resize(target, outPut, Number(width), Number(height))
      res.sendFile(outPut)
    }
  } catch (error) {
    console.log(error)
  }
})

export default imageCrop
