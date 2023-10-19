import express from 'express';
import { userSignup } from '../controller/user-controller.js';
import { userLogin } from '../controller/user-controller.js';
import { getProducts } from '../controller/Product-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post("/login", userLogin);
router.get('/products', getProducts)


export default router;