import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
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
    }]
}, {
        timestamps: true
    });

export default mongoose.model('Project', ProjectSchema);