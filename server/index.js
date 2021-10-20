import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express()
dotenv.config();
//middleware so that we can use this in our application

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use( '/posts', postRoutes);

//const CONNECTION_URL = "mongodb+srv://chirchir1:WoDWqHy2CpRVCO9v@memories-cluster.hqkal.mongodb.net/memories-cluster?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

//mongoose.connect() takes two args: the connection url &an object with all the options
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true})
//app.listen accepts two args: PORT & a callback func that runs when it successfully listens
.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((err) => console.log(err.message));

//console.log(process.cwd());
//mongoose.set('useFindAndModify', false); : apparently this was dealt with