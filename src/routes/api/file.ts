import express from 'express'
const file = express.Router()
file.get('/', (req, res) => {
  res.send('fileONE')
})
export default file
