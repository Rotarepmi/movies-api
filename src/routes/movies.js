import { Router } from 'express';
import { catchAsync } from '../middlewares/errors';
import moviesController from '../controllers/moviesController';

export default () => {
    const api = Router();

    // GET /movie/:id
    api.get('/:id', catchAsync(moviesController.findOne))
    
    // GET /movies
    api.get('/', catchAsync(moviesController.findAll))

    // POST /movies
    api.post('/', catchAsync(moviesController.create))

    // PUT /movies/:id
    api.put('/:id', catchAsync(moviesController.update))

    // DELETE /movies/:id
    api.delete('/:id', catchAsync(moviesController.delete))

    return api;
}