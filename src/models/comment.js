import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = Schema({
    comment: String,
    author: {
        username: String,
    },
    movie: {
        name: String,
        _id: Schema.Types.ObjectId
    }
    }, {
        timestamps: true
    });

export default mongoose.model('Comment', CommentSchema);