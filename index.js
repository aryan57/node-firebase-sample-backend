'use strict';
const express = require('express');
const config = require('./config');
const studentRoutes = require('./routes/student-routes');

const app = express();
app.use(express.json());
app.use('/api', studentRoutes.routes);

app.listen(config.port, () => {
    console.log('App is listening on url ' + config.url + ' at port ' + config.port);
})