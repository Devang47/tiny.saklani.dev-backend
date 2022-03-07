import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDb from './db/connect.js';
import router from './routes/Shorten.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/', router);

app.all('*', (req, res) => {
  res.status(405).json({ error: 'not a valid route' }).end();
});

const start = async () => {
  try {
    await connectToDb(process.env.URI);

    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
      console.log('Listening on PORT: ' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
