import express from 'express'; //how to handle post.api to use body-parser
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();

app.use(cors()); //CROSS ORIGIN RESOURCE SHARING --> TO USE STOP BROWSER TO RUN IN ANOTHER SERVER
app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json({extended: true}));
app.use('/', router); 


const PORT = process.env.PORT || 8000;

dbConnection();

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));