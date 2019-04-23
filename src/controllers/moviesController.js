import axios from 'axios';
import Movie from '../models/movie';
import omdb from '../config/omdb';

export default {
    async findOne(req, res, next) {
        const movie = await Movie.findOne({ _id: req.params.id });
        if (!movie) return next();
        return res.status(200).send({ movie });
    },

    async findAll(req, res) {
        const movies = await Movie.find().sort({ name: 'asc' });
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

        const newObj = Object.entries(movieInfo.data)
            .map(entry => [entry[0].toLowerCase(), entry[1]]);
        

        console.log(newObj)

        const movie = await new Movie(movieInfo.data).save();

        return res.status(201).send({ movie, message: 'Movie successfully created.' });
    },

    async update(req, res, next) {
        const movie = await Movie.findOne({ _id: req.params.id });
        if (!movie) return next();

        Object.assign(movie, req.body);
        await movie.save();

        return res.status(200).send({ movie, message: 'Movie successfully updated.' });
    },

    async delete(req, res, next) {
        const movie = await Movie.findOne({ _id: req.params.id });
        if (!movie) return next();

        await movie.remove();

        return res.status(200).send({ movie, message: 'Movie successfully deleted.' });
    },
}