const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../backend/src/db')
const routes = require('./routes/index')

const app = express();
app.use(cors()); //allows for cross-origin resource sharing

//app.get('/', (req, res) => res.send('Home'))

app.use('/', routes);
const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`);
});
