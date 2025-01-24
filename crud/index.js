const express = require('express');
const mongoClient = require('mongoose');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const employeeRoute = require('./routes/EmployeeRoute');
const app = express();
dotEnv.config();
//middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 8899;

mongoClient.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database connected successfully');
}).catch((err)=>{    
    console.log('Error in connecting to database', err);
});

app.use('/employee', employeeRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});