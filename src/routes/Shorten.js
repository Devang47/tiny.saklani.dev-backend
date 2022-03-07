import express from 'express';
import dotenv from 'dotenv';
import { createShortUrl, getFullURL } from '../controllers/Link.js';

const router = express.Router();
// dotenv.config();

router.route('/create').post(createShortUrl);
router.route('/get').post(getFullURL);

export default router;
