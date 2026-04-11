import { Router } from 'express';
import { authenticate, hasRole, validateBody } from '#middleware';
import { createPost, deletePost, getAllPosts, getSinglePost, updatePost } from '#controllers';
import { postSchema } from '#schemas';

const postRoutes = Router();

postRoutes.route('/').get(getAllPosts).post(authenticate, validateBody(postSchema), createPost);

postRoutes
  .route('/:id')
  .get(getSinglePost)
  .put(authenticate, hasRole('self'), validateBody(postSchema), updatePost)
  .delete(authenticate, hasRole('self'), deletePost);

export default postRoutes;
