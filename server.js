require('dotenv').config();

const express = require('express');
const app = express();

const middlerware = require('./helpers/middlerwares');

app.use(express.json());

// error handling middleware: 
app.use(middlerware.ErrorHandlingMiddleware);

const mongoose = require('mongoose');
// Database & Server Connection.
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database is Connected !!!!")
    app.listen(3000, () => {
      console.log("server is ready to serve((!!))")
    })
  })
  .catch((err) => {
    console(err)
  })