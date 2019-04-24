import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CommentSchema = Schema({
    comment: {
        type: String,
        required: true
    },
    author: {
        username: {
            type: String,
            required: true
        },
    },
    movie: {
        name: String,
        _id: Schema.Types.ObjectId
    }
}, {
        timestamps: true
    });

export default mongoose.model('Comment', CommentSchema);