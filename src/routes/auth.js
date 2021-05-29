import { Router } from 'express';
import auth from '../controllers/Auth';
import asyncHandler from '../middlewares/asyncHandler';

const router = new Router();

router.post('/signup', asyncHandler(auth.signup));
router.post('/login', asyncHandler(auth.login));

export default router;
