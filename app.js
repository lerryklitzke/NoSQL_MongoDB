const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/testRoutes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(3001);

// my comment