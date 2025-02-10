const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will throw an error if the database connection fails
  res.send(database.query('SELECT * FROM users')); 
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});