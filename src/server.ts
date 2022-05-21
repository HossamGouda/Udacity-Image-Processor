import express, { Application, Request, Response } from 'express'
import * as dotenv from 'dotenv'
// import morgan from 'morgan'
import routes from './routes/index'

dotenv.config()
const app: Application = express()
const port = process.env.PORT || 5555
app.use('/api', routes)
app.listen(port, () => {
  console.log(`Server is live on port ${port}`)
})

app.get('/', (req: Request, res: Response): void => {
  res.send('Welcom to Main page for APII Image Processor')
})

export const myFunc = (num: number): number => {
  return num * num
}

export default app
