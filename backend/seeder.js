/**
 * Seeder file to populate database
 *  - Make sure that you've set up XAMPP correctly with mySQL, and make sure that the db is set up correctly
 *  - The dependency you should have used for Node/Express is mysql2: https://www.npmjs.com/package/mysql2
 *  - This file assumes that both the seeder file AND the .json files you're seeding from are in the root directory
 *  - It assumes that you're using the userData.json file provided; if you're using a different dataset, you'll need to ajust accordingly
 */

//import dependencies
const path = require('path'); //helps us find our file easily
// const fs = require('fs').promises; //helps us get access to promises when dealing with seeding data into our database
const color = require('colors');
const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '..', '.env')});
//import our database [x]
//import the model that we are trying to import our data into [x]
const db = require('./src/db'); //Check the file path
const Cat = require('./src/models/Cat'); //Check the file path of this model

//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {
  try {
    await db.sync({ force: true }); // clear out database + tables
    const catSeedPath = path.join(__dirname, 'src', 'data', 'userData.json'); //gets the path to userData.json
    //asynchronously reads the content in this file
    // const catBuffer = await fs.readFile(catSeedPath);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", process.env.KEY);

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    const limit = 50;
    let catsData;
    fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        catsData = JSON.parse(String((result)))
        return result;
      })
      .catch(error => console.log(`error: ${error}`.red));
    // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
    // const catsData  = JSON.parse(String(catBuffer));
    //creates Show and puts it into our Show table
    const CatPromises = catsData.map((cat) => Cat.create({
      weight: cat.weight.imperial,
      cat_id: cat.id,
      name: cat.name,
      temperament: cat.temperament,
      origin: cat.origin,
      description: cat.description,
      life_span: cat.life_span,
      adaptabitity: cat.adaptabitity,
      affection_level: cat.affection_level,
      energy_level: cat.energy_level,
      grooming: cat.grooming,
      health_issues: cat.health_issues,
      wikipedia_url: cat.wikipedia_url,
      image_id: cat.image.id,
      image_width: cat.image.width,
      image_height: cat.image.height,
      image_url: cat.image.url
    }));
    // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    await Promise.all(CatPromises);
    console.log('User database info populated!');
  } catch(error) {
    console.error(`error: ${error.message}`.red);
  };

};

seed();
