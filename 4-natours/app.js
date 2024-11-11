const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ messege: 'Hello from the server side!', app: 'narours' });
});

app.post('/', (req, res) => {
  res.send('You can post to this endpoint...');
});

app.listen(port, () => {
  console.log(`Running at port: ${port}...`, port);
});
