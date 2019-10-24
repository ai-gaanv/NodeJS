var fs = require('fs');

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('html_file_toread.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8082);