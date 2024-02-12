import express from 'express';
import process from 'node:process';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import JobsModel from './models/Jobs.js'; 
import CategoryModel from './models/Category.js';
import User from './models/User.js';

const app = express();
const PORT = process.env.PORT || 3000;
// app.set('port', PORT);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.get('/getJobs', (req, res) => {
  JobsModel.find()
      .then(jobs => res.json(jobs))
      .catch(err => res.json(err));
});

app.get('/getCategory', (req, res) => {
  CategoryModel.find()
      .then(jobs => res.json(jobs))
      .catch(err => res.json(err));
});

app.get('/getUsers', (req, res) => {
  User.find()
      .then(user => res.json(user))
      .catch(err => res.json(err));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(500).json({
    error: err?.message ?? 'Something went wrong',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;