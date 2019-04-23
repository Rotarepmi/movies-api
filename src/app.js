import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// config
import config from './config/config';
import dbConfig from './config/database';

// routes
import comments from './routes/comments';

// create app
const app = express();

// connect to mongoDB
mongoose.connect(dbConfig.mongoUrl, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

app.use(bodyParser.json()); // application/json headers

// use routes
app.use('/comments', comments());

// let's play!
app.listen(config.server.port, () => {
    console.log(`Server is up!`);
});