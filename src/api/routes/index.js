import { Router } from 'express';

import userRoutes from '../v1/user';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Movie api is live!' });
});

apiRouter.use('/user', userRoutes);

export default apiRouter;
