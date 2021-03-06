import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = Schema({
    title: {
        type: String,
        required: true
    },
    year: String,
    rated: String,
    released: String,
    runtime: String,
    genre: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    language: String,
    country: String,
    awards: String,
    poster: String,
    ratings: [{
        Source: String,
        Value: String
    }],
    metascore: String,
    imdbrating: String,
    imdbvotes: String,
    imdbid: String,
    type: String,
    dvd: String,
    boxoffice: String,
    production: String,
    website: String,
    comments: [{
        _id: Schema.Types.ObjectId,
        author: {
            username: String
        },
        comment: String,
        createdAt: Schema.Types.Date,
        updatedAt: Schema.Types.Date
    }]
}, {
        timestamps: true
    });

export default mongoose.model('Movie', MovieSchema);