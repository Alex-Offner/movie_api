import { Router } from 'express';

import userRoutes from '../v1/users';
import movieRoutes from '../v1/movies';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Movie api is live!' });
});

apiRouter.use('/users', userRoutes);
apiRouter.use('/movies', moviesRoutes);

export default apiRouter;
