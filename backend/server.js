const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require ('./src/routes/index')


const app = express();
app.use('/api', routes);

// app.use(cors()); //allows for cross-origin resource sharing

// app.get('/', (request, response) => {
//   response.json('Hi Mom')
// })

const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`);
});