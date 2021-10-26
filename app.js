var express = require('express');
var app = express();

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
})