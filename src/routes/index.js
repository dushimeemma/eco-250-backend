import { Router } from 'express';

const router = new Router();

router.use('/', (req, res) => {
  res.status(200).json({message: "Welcome to Eco250 Project"})
})

export default router;