import express from 'express'

const logger = (
  req: express.Request,
  res: express.Response,
  next: () => void
): void => {
  console.log(`The page ${req.url} visited.`)
  next()
}

export default logger
