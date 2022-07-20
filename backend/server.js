const express = require('express');
const path = require('path');
const cors = require('cors');
const debug = require('debug')('app:sequelize');
const sequelize = require('./src/db');
const colors = require('colors');

const app = express();
const routes = require('./src/routes/index.js')
app.use(cors()); //allows for cross-origin resource sharing

//app.get('/', (req, res) => res.send('Home'))

//Authenticate/Test mySQL connection
sequelize
  .authenticate()
  .then((res) => debug(colors.rainbow('Database is connected')))
  .catch((err) => {debug(colors.red.inverse('There was an error connecting to the Database'), err);
  process.exit(1); //Terminates node servers
});

//Routes
app.use('/api', routes);

app.use('/', routes);
const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`);
});



