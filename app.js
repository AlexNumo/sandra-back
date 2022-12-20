const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const authRouter = require('./routes/api/auth');
const scheduleRouter = require('./routes/api/schedule');
const traineeRouter = require('./routes/api/trainee');
const coachRouter = require('./routes/api/coach');
const clientRouter = require('./routes/api/client');
const kindTraineeRouter = require('./routes/api/kind-trainee');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger(process.env.NODE_ENV === 'dev' ? 'dev' : 'tiny'));

app.use('/users', authRouter);
app.use('/api', scheduleRouter);
app.use('/trainee', traineeRouter);
app.use('/coach', coachRouter);
app.use('/client', clientRouter);
app.use('/kindtrainee', kindTraineeRouter);



app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Internal Server Error"} = err;
  res.status(status).json({ message })
})

module.exports = app;
