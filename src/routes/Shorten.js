import express from 'express';
import { createShortUrl, getFullURL } from '../controllers/Link.js';

const router = express.Router();
router.route('/create').post(createShortUrl);
router.route('/get').post(getFullURL);

export default router;
