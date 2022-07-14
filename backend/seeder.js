const { items } = require('./src/data/seedData');
const sequelize = require('./src/db'); //Database
const Product = require('./src/models/Product');
const debug = require('debug')('app:seeder');
const colors = require('colors');

const populateDb = async () => {
  debug('Populating DB...');
  try {
    await sequelize.sync({ force: true }); //reset the database
    await Product.bulkCreate(items); //populate database
    debug(colors.green.inverse('SUCCESS: Database has been re-populated...'));
    process.exit();
  } catch (error) {
    debug(colors.red(`Error with seeding database: `), error.message);
    process.exit(1);
  }
};

if (process.argv[2] === '-import') {
  populateDb();
} else {
  debug(colors.yellow('No changes to database'));
}
