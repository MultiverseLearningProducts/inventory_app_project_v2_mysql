//import dependencies
const path = require('path'); //helps us find our file easily
const fs = require('fs').promises; //helps us get access to promises when dealing with seeding data into our database
//import our database [x]
//import the model that we are trying to import our data into [x]
const db = require('./src/db'); //Check the file path
const User = require('./src/models/User'); //Check the file path of this model
//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {
  await db.sync({ force: true }); // clear out database + tables
  // const userSeedPath = path.join(
  //   __dirname,
  //   // backend,
  //   src,
  //   data,
  //   'userData.json'
  // ); //gets the path to userData.json

  const userSeedPath = path.join(__dirname, 'src', 'data', 'userData.json'); //gets the path to userData.json

  //asynchronously reads the content in this file
  const userBuffer = await fs.readFile(userSeedPath);
  // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
  const usersData = JSON.parse(String(userBuffer));

  //creates Show and puts it into our Show table
  const UserPromises = usersData.map((user) => User.create(user));
  // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
  await Promise.all(UserPromises);
  console.log('User database info populated!');
};

seed();