const express = require('express');
const app = express();
app.get('/', (req, res) => {
  return res.status(200).send({ "message": "Response from server1!" });
});

app.listen(5001, () => console.log('Server is up and running'));