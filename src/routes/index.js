import { Router } from 'express';
import auth from './auth';
import product from './product';
import tree from './tree';

const router = new Router();

router.get('/', (req, res) => {
  res.status(200).json({message: "Welcome to Eco250 Project"})
})

router.use('/auth', auth);
router.use("/products", product);
router.use("/trees", tree)

export default router;