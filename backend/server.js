const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors()); //allows for cross-origin resource sharing

const server = app.listen(8000, () => {
  console.log(`Server is up and running on PORT: 8000`);
});
