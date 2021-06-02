import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes';
import dotenv from 'dotenv'

dotenv.config();

// express app
const app = express();

app.use(cors());

// body parse configuration
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', router);

// Error handling to catch 404
app.all('*', (_req, res) => {
  res.status(404).json({
    error: 'address Not found',
  });
});

const port = process.env.PORT || 5000


// Starting server
const server = app.listen(port, () => {
  console.log(`Server running on ${server.address().port}`);
});

export default app;