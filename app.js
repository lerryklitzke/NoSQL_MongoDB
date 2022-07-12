const express = require('express');
const router = require('./routes/testRoutes');

const app = express();

app.use(router);

app.listen(3001);

// my comment