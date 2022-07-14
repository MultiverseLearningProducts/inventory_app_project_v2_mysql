# Inventory App Practice - React and mySQL

This is the starter code for a basic, front-to-back inventory application, used as additional practice in week 8 or 9 of the SWE 2.0 US curriculum.

The project is expecting to use React on the frontend, with create-react-app already set up in /frontend. It uses mySQL as its query language, uses XAMPP to run the database itself, and uses phpmyadmin to give a GUI to help manage your database.

---

## To use:

### Set up Project:

- Fork the repository
- Clone the repo down onto your local machine
- Change directory into the correct folder

### NPM

To correctly install all depdendencies for all parts of the project, you'll need to install dependencies in both the root directory _and_ in /frontend.

- In your terminal, run:
  `npm install`
- Then, change directory into the frontend folder:

```
//from root directory

cd frontend
```

- Inside the frontend folder, run:
  `npm install` again.

This will make sure that all dependencies are installed for both the entire project as well as the React application used for the frontend.

### Setting up the server:

Read the README.md file located at backend/README.md for instructions on how to get the server up and running correctly.

### Running the project:

To run the project, use any of the following scripts that have currently been set up:

- To run the entire project (uses _concurrently_ dependency to do so): `npm start`
- To run the only the server in Node:
  `npm run server`
- To run the server using nodemon:
  `npm run dev`
- To run the React App - frontend - only:
  `npm run client`
- To empty and then repopulate the database with the data from /src/data/data.js:
  `npm run data:import`
