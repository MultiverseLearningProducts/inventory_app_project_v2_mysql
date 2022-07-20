const express = require('express');
const path = require('path');
const cors = require('cors');
const debug = require('debug')('app:server');
const morgan = require('morgan');
const sequelize = require('./src/db');
const colors = require('colors');

const app = express();
// const routes = require('./src/routes/index.js')

app.use(morgan('dev'));
app.use(cors()); //allows for cross-origin resource sharing

//Authenticate/Test mySQL connection
sequelize
  .authenticate()
  .then((res) => debug(colors.rainbow.inverse('Database is connected')))
  .catch((err) => {
    debug(console.error(`There was an error connecting to the Database`.red));
    process.exit(1); //Terminates node servers
  });

// app.use('/', routes);
const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`.green);
});