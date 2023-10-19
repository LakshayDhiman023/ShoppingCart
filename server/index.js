import express from 'express'
import dotenv from 'dotenv'
import DefaultData from './default.js';
import { Connection } from './database/db.js';
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();




dotenv.config()

app.use(cors());


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/", Router);
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Port = 8000

Connection(USERNAME, PASSWORD);

app.listen(Port, ()=>console.log(`Server is running on Port ${Port}`))

DefaultData()