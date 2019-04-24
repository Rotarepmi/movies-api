import axios from 'axios';
import fromEntries from 'object.fromentries';
import Movie from '../models/movie';
import Comment from '../models/comment';
import omdb from '../config/omdb';

export default {
    async findOne(req, res, next) {
        const movie = await Movie.findOne({ _id: req.params.id });
        const comments = await Comment.find({ 'movie._id': req.params.id });

        if (!movie) return next();

        if (comments.length) movie.comments = comments;

        return res.status(200).send({ movie });
    },

    async findAll(req, res, next) {
        const movies = await Movie.find().sort({ name: 'asc' });

        if (!movies) return next();

        return res.status(200).send({ movies });
    },

    async create(req, res, next) {
        const movieInfo = await axios.get(`${omdb.omdbUrl}`, {
            params: {
                apikey: process.env.OMDB,
                t: req.body.title,
                y: req.body.year
            }
        });

        if (movieInfo.data.Response === 'False' || !movieInfo) return next();

        // change those ugly uppercase letters
        const moviesObj = fromEntries(Object.entries(movieInfo.data).map(entry => [entry[0].toLowerCase(), entry[1]]));

        // we want to have values from request in our db
        Object.assign(moviesObj, req.body);

        const movie = await new Movie(moviesObj).save();

        return res.status(201).send({ movie, message: 'Movie successfully created.' });
    },

    async update(req, res, next) {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);

        if (!movie) return next();

        return res.status(200).send({ movie, message: 'Movie successfully updated.' });
    },

    async delete(req, res, next) {
        const movie = await Movie.findByIdAndDelete(req.params.id);

        if (!movie) return next();

        return res.status(200).send({ movie, message: 'Movie successfully deleted.' });
    },
}