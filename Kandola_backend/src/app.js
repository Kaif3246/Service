import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import bodyParser from 'body-parser';
import formRoutes from './route/form/form.routes.js'
import serviceRoutes from './route/serviceForm/serviceRoute.routes.js'





const app = express()

app.use(cors({
    origin:'*'
}))

app.use(express.urlencoded({extended:"true"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.json());



app.use('/api/form',formRoutes)
app.use('/api/serviceForm',serviceRoutes)























export {app}
 