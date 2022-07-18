//import dependencies
const path = require('path'); //helps us find our file easily
const fs = require('fs').promises; //helps us get access to promises
const { sneakers } = require('./src/data/sneakers')

//import our database [x]
const sequelize = require('./src/db');

//import the model that we are trying to import our data into [x]
const Shoe = require('./src/models/Shoe'); //Check the file path of this model

// modules for debugging
const debug = require('debug')('app:seeder');
const colors = require('colors');

//write our seed function -> take our json file, create rows with our data into it
const populateDb = async () => {
  debug('Pupulating DB...');
  try {
	  // reset the DB
    await sequelize.sync({force: true});
    //POPULATE DB
    await Shoe.bulkCreate(sneakers);
    debug(colors.green.inverse("SUCCESS: Database has been re-populated!"));
    process.exit(1)
  } catch (error) {
    debug(color.red(`Error with seeding database: ${error.message}`));
    process.exit(1);
  }
};

if (process.argv[2] === '-import') {
  populateDb();
} else {
  debug(colors.yellow('No changes to database'));
}