const url = require("url");
const querystring = require("querystring");

const parsedUrl = url.parse(
  "http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript"
);
const query = querystring.parse(parsedUrl.query);
const l = console;
l.log(parsedUrl);
l.log("querystring.parse():", query);
l.log("querystring.stringify():", querystring.stringify(query));
