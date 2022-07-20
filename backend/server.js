const express = require('express');
const path = require('path');
const cors = require('cors');
const sequelize = require('./src/db');
const colors = require('colors');

const app = express();
const routes = require('./src/routes/index.js')
app.use(cors()); //allows for cross-origin resource sharing

const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`);
});


//Authenticate/Test mySQL connection
sequelize
  .authenticate()
  .then((res) => debug(colors.rainbow.inverse('Database is connected')))
  .catch((err) => {debug(colors.red.inverse('There was an error connecting to the Database'), err);
  process.exit(1); //Terminates node servers
});


//Routes
app.use('/api', routes);


