var express = require('express');
var fs = require('fs');
var buffer = new Buffer(fs.readFileSync('/home/ubuntu/bitstarter/index.html',"utf-8"));

var out = buffer.toString("utf-8");


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(out);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
