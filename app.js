// Main modules
const express = require('express');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');

app.use(helmet());
const routes = require('./routes');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/', routes);

module.exports = app;
