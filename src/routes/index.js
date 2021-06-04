import { Router } from 'express';
import auth from './auth';

const router = new Router();

router.get('/', (req, res) => {
  res.status(200).json({message: "Welcome to Eco250 Project"})
})

router.use('/auth', auth);

export default router;