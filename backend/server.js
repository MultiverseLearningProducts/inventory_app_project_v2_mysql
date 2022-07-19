const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require ('./src/routes/index')
const app = express();


app.use(express.json()); 
app.use('/api', routes);


const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`);
});