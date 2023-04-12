import express from 'express';
import { createShortUrl, getFullURL } from '../controllers/Link.js';

const router = express.Router();
router.route('/create').post(createShortUrl);
router.route('/get').post(getFullURL);
router.route('/ping').all((req, res) => {
    res.send('Alright, it\'s working.')
});


export default router;
