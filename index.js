require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

; (async function () {
  try {
    await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017", {
      dbName: process.env.MONGO_DB || "CRM-API"
    })
    console.log('Connected to DB successfully')
  } catch (error) {
    throw new Error(`Error connecting to DB: ${error}`)
  }
})()

try {
  const app = express()
    .use(cors())
    .use(morgan('combined'))
    .use(express.json())
    .use('/api', require('./api/routes'));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.info('>'.repeat(40));
    console.info('💻  Reboot Server Live');
    console.info(`📡  PORT: http://localhost:${PORT}`);
    console.info('>'.repeat(40) + '\n');
  });
} catch (error) {
  throw new Error(error);
}
