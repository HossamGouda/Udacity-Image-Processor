import express from 'express'

const logger = (req: express.Request, res: express.Response, next: () => void): void => {
  console.log(`The page has been visited ${req.url}.`)
  next()
}

export default logger
