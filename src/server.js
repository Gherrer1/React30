const express = require('express');
const logger = require('morgan');
const config = require('./config');
const path = require('path');
const app = express();

app.use(logger('dev'));
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`));
