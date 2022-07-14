# basic_web_server_express_using_MYSQL

Simple Web Server used for reference and demonstrations in Week 6/7 of SWE 2.0 curriculum. This project uses mySQL as the database query language.

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

- Once both of these packages are installed, run the mySQL server with XAMPP.

- Once the server is running, use your browser to navigate to to the [following URL](http://localhost/phpmyadmin/index.php) to access the phpmyadmin GUI.

### Set up Project with NPM:

- Fork the repository
- Clone the repo down onto your local machine
- Change directory into the correct folder
- In your terminal, run:
  `npm install`

This product uses environment variables with the package [dovenv](https://www.npmjs.com/package/dotenv). The .env file is set to not be pushed up to any remote repository, so you'll need to create and configure your own, local one.

#### To do this:

- After all dependencies are downloaded correctly. Create a '.env' file in the root directory.
- Add to this file the following variables - note the formatting:

```
PORT = 5000 //this can be a value of your choosing, but make sure that the port is not being used by other process
MODE = development
```

- Save the file. That should be good to go.

### Running the server:

To run the server, use any of the following scripts:

- To run the server.js in Node:
  `npm start`
- To run the server using nodemon:
  `npm run dev`
- To empty and then repopulate the database with the data from /src/data/data.js:
  `data:import`
