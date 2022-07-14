# BACKEND: basic_web_server_express_using_MYSQL

Backend web server and dev database for this project. Database uses mySQL as the database query language, with Sequelize as an ORM.

Additonally, it uses XAMPP to run the database itself, and uses phpmyadmin to give a GUI to help manage your database.

---

## To use:

### Set up database (for a Mac using Homebrew):

- Make sure [Homebrew](https://brew.sh/) is installed.
- Install [XAMPP](https://www.apachefriends.org/) by running the following command in the terminal:

```
brew install --cask xampp
```

- Then, install [Phpmyadmin](https://www.phpmyadmin.net/) by entering the following command in the terminal:

```
brew install phpmyadmin
```

- Once both of these packages are installed, run the mySQL server with XAMPP. To do this, open Xampp, navigate to the 'Manage Servers' tab at the top of the GUI, and make sure to start running both the 'Apache Web Server' and 'MySQL Database'. Keep them running.

- Once the server/database is running, use your browser to navigate to to the [following URL](http://localhost/phpmyadmin/index.php) to access the phpmyadmin GUI.

### Set up Project:

If you haven't already, run `npm install` from the root directory to install all needed dependencies.

In phpmyadmin, create a new database. Currently, the project is configured to use a a database with the name **_inventory_app_1_**, so you should name your new database this. If you wish to use a different database name, you'll need to configure this in _src/db.js_.

This product uses environment variables with the package [dovenv](https://www.npmjs.com/package/dotenv). The .env file is set to not be pushed up to any remote repository, so you'll need to create and configure your own, local one.

#### To do this:

- After all dependencies are downloaded correctly. Create a _.env_ file in the **_root directory_**. Do not create the _.env_ in the backend folder, or you'll need to change the file path in backend/server.js.
- Add to this file the following variables - note the formatting:

```
PORT = 5000 //this can be a value of your choosing, but make sure that the port is not being used by other process
MODE = development
```

- Save the file. Then should be good to go.

### Running the server:

To run the server, use any of the following scripts:

- To run the server.js in Node:
  `npm start`
- To run the server using nodemon:
  `npm run server`
- To empty and then repopulate the database with the data from /src/data/data.js:
  `npm run data:import`
