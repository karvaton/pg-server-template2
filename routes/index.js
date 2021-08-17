import userRouter from './users-routes.js';
import { Router } from "express";
const router = new Router;

router.use('/user', userRouter);

export default router;