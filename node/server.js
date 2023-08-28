const express = require('express');
const app = express();
const db = require('./db'); // Replace with the correct path to your db.js file

// Your routes and server setup here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
