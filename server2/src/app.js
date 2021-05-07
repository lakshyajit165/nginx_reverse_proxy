const express = require('express');
const app = express();
app.get('/', (req, res) => {
  return res.status(200).send({ "message": "Response from server2!" });
});

app.listen(5002, () => console.log('Server is up and running'));