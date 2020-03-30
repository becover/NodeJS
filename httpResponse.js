const http = require("http");
const server = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.statusMessage = "GGA GGUNG!";

    res.write("<html><body><h1>Hello World!</h1></body></html>");
    res.end();
  })
  .listen(3000);
