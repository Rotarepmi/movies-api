import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// config
import config from './config/config';
import dbConfig from './config/database';

// create app
const app = express();

app.use(bodyParser.json()); // application/json headers

// let's play!
app.listen(config.server.port, () => {
    console.log(`Server is up!`);
});