import express from 'express';
import { createShortUrl, getFullURL } from '../controllers/Link.js';

const router = express.Router();
router.route('/create').post(createShortUrl);
router.route('/get').post(getFullURL);
router.route('/temp').post((req, res) => {
    console.log('object');
    res.send('HELLO WORLD')
});


export default router;
