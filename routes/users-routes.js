import * as controler from "../controlers/user-controlers.js";
import { Router } from "express";
const router = new Router();

router.post('/registration', controler.registration);
router.post('/login', controler.login);
router.get('/auth', controler.checkAuth);

export default router;
