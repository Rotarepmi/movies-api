import { Router } from 'express';
import { catchAsync } from '../middlewares/errors';
import commentsController from '../controllers/commentsController';

export default () => {
    const api = Router();

    // GET /comment/:id
    api.get('/:id', catchAsync(commentsController.findOne))
    
    // GET /comments
    api.get('/', catchAsync(commentsController.findAll))

    // POST /comments
    api.post('/', catchAsync(commentsController.create))

    // PUT /comments/:id
    api.put('/:id', catchAsync(commentsController.update))

    // DELETE /comments/:id
    api.delete('/:id', catchAsync(commentsController.delete))

    return api;
}