var http = require('http');
var mymodule = require('./myfirstmodule')
var url = require('url');

http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('My First Program 20 !');
  // res.write("The date and time are currently: " + mymodule.myDateTime());
  // res.end()


  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write(req.url);
  // res.end();

  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);

}).listen(8082);

