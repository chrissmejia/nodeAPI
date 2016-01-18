var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('API: /api/users/:id');
});

app.get('/api/users/:id', function(req, res) {
    var user = {
        username: req.params.id,
        firstName: 'Chriss',
        lastName: 'Mejía'
    };
    res.json(user);
});

app.listen(3000);
console.log('Listening on port 3000');
