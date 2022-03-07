import axios from 'axios';
import ShortenedURL from '../models/Link.js';
import { getRandomString } from '../utils/index.js';

import dotenv from 'dotenv';
dotenv.config();

export const createShortUrl = async (req, res) => {
  const { url, created } = req.body;
  if (!url) {
    res.status(400).send('Incomplete data');
    return
  }

  const result = await minifyUrl(url, created);

  if (result.error) {
    res.status(400).json({ error: result.error });
    return;
  }
  res.send(result);
};

const minifyUrl = async (url, created) => {
  const randomString = getRandomString();
  try {
    const shortenedUrl = `${process.env.BASE_URL}/go/${randomString}`;
    const result = await ShortenedURL.create({
      url,
      short: randomString,
      created: created || undefined,
      fullShortUrl: shortenedUrl
    });
    return { data: result, shortenedUrl };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export const getFullURL = async (req, res) => {
  const { url } = req.body
  if (!url) {
    res.status(400).send('Incomplete data');
    return
  }

  try {
    const result = await ShortenedURL.find({ short: url })
    if (result.length <= 0) {
      res.status(404).send({ error: 'Not found' }).end()
      return
    }
    res.send({ url: result[0].url, data: result[0] })
    return
  } catch (error) {
    console.log(error);
    res.status(400).send(error).end()
    return
  }
}