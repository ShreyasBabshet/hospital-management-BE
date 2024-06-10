import express from "express";
import dotenv from "dotenv";
import { sequelizeConnection } from "./config/dbConfig";
const doctorRoutes = require('./modules/doctor/doctor.routes');
const nurseRoutes = require('./modules/nurse/nurse.routes');
const roleRoutes = require('./modules/roles/role.router');
const userRoutes = require('./modules/user/routes/user.routes');
const requestRoutes = require('./modules/requests/replace_requests.routes');
dotenv.config()
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use('/user', userRoutes);
app.use('/role', roleRoutes);
app.use('/doctor', doctorRoutes);
app.use('/nurse', nurseRoutes);
app.use('/request', requestRoutes);
sequelizeConnection.authenticate().then(() => {
    console.log("Connection has been established successfully");
}).catch(() => {
    console.log("Connection failed");
})

sequelizeConnection.sync().then(() => {
    app.listen(port, () => {
        console.log(`Listning on port number ${port}`);
    })
}).catch(() => {
    console.log('Something went wronge');
})
