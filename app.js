const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const tourRouter = require('./routes/tourRoutes')

const app = express();
app.use(express.json());

app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});


app.use('/api/v1/users', userRouter);
app.use('/api/v1/tours', tourRouter);




module.exports = app;
