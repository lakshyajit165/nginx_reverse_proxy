const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.get('/', (req, res) => {
  return res.status(200).send({ "message": "Response from server2!" });
});

app.get('/app', (req, res) => {
  return res.status(200).send({ "message": "App Response from server2!" });
});

app.get('/app/v1', (req, res) => {
  return res.status(200).send({ "message": "App v1 Response from server2!" });
});

app.listen(5002, () => console.log('Server is up and running'));