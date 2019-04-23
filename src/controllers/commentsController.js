import Comment from '../models/comment';

export default {
    async findOne(req, res, next) {
        const comment = await Comment.findOne({ _id: req.params.id });
        
        if (!comment) return next();

        return res.status(200).send({ comment });
    },

    async findAll(req, res, next) {
        const comments = await Comment.find().sort({ createdAt: 'desc' });

        if (!comments) return next();

        return res.status(200).send({ comments });
    },

    async create(req, res, next) {
        const comment = await new Comment({
            comment: req.body.comment,
            author: {
                username: req.body.author.username
            },
            movie: {
                name: req.body.movie.name,
                _id: req.body.movie._id
            }
        }).save();

        console.log(comment);

        if (!comment) return next();

        return res.status(201).send({ comment, message: 'Comment successfully created.' });
    },

    async update(req, res, next) {
        const comment = await Comment.findByIdAndUpdate(req.params.id, req.body);
        
        if (!comment) return next();

        return res.status(200).send({ comment, message: 'Comment successfully updated.' });
    },

    async delete(req, res, next) {
        const comment = await Comment.findByIdAndDelete(req.params.id);

        if (!comment) return next();

        return res.status(200).send({ comment, message: 'Comment successfully deleted.' });
    },
}