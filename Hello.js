const http = require("http");
const server = http
  .createServer((req, res) => {
    console.log("HTTP Method :" + req.method);
    console.log("HTTP URL :" + req.url);
    console.log("===HEADERS===");
    console.log(req.headers);

    res.write("Hello Node JS!");
    res.end("Good Bye~");
  })
  .listen(3000);
