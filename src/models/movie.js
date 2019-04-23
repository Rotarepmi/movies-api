import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    Rated: String,
    Released: String,
    Runtime: String,
    Genre: String,
    Director: String,
    Writer: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    Ratings: [{
        Source: String,
        Value: String
    }],
    Metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    DVD: String,
    BoxOffice: String,
    Production: String,
    Website: String,
    Comments: [{
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