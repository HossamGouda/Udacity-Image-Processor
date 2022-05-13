import express from 'express'
import file from "./api/file";
import file2 from "./api/file2";

const routes = express.Router()
routes.get('/', (req, res) =>{
    res.send('images Api')
})
routes.use('/file1',file)
routes.use('/file2',file2)


export default routes;
