import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default {
    mongoUrl: process.env.NODE_ENV === 'development' 
    ? 'mongodb://localhost:27017/movies' 
    : `mongodb+srv://Rotarepmi:${process.env.MONGO}@movies-qdlml.mongodb.net/movies?retryWrites=true`
}