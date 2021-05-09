const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.get('/', (req, res) => {
  return res.status(200).send({ "message": "Response from server1!" });
});

app.get('/app', (req, res) => {
  return res.status(200).send({ "message": "App Response from server1!" });
});

app.get('/app/v1', (req, res) => {
  return res.status(200).send({ "message": "App v1 Response from server1!" });
});

app.listen(5001, () => console.log('Server is up and running'));