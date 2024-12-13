const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const usersRouter = require('./controllers/auth');
const profilesRouter = require('./controllers/profiles');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use('/auth', usersRouter);
app.use('/profiles', profilesRouter);

// Routes go here

app.listen(3000, () => {
  console.log('The express app is ready!');
});
