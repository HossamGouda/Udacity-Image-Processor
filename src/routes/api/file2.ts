import express from 'express'
const file2 = express.Router()
file2.get('/', (req, res) => {
  res.send('file2')
})
export default file2
