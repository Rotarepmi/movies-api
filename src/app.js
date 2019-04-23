import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// create app
const app = express();

app.use(bodyParser.json()); // application/json headers

// let's play!
app.listen(config.server.port, () => {
    console.log(`Server is up!`);
});