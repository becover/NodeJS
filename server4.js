const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map(v => v.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith("/login")) {
      const { query } = url.parse(req.url);
      const { name } = qs.parse(query);
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 5);
      res.writeHead(302, {
        Location: "/",
        "Set-Cookie": `name=${encodeURIComponent(
          name
        )}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
      });
      res.end();
    } else if (cookies.name) {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      fs.readFile("./server4.html", (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
  })
  .listen(8083, () => {
    console.log("8083번 포트에서 서버 대기 중입니다!");
  });

/**
 * 쿠키명=쿠키값
 * Expires=날짜: 만료 기한. 기본값은 클라이언트 종료될 때까지
 * Max-age=초: Expire보다 우선시함. 날짜 대신 초입력
 * Domain=도메인명: 쿠키가 전송될 도메인을 특정함. 기본값은 현재 도메인
 * Path=URL: 쿠키가 전송될 URL을 특정함. 기본값은 /이고 이경우 모든 URL에서 쿠키전송 가능
 * Secure: HTTPS일 경우에만 쿠키가 전송됨
 * HttpOnly: 설정시 자바스크립트에서 쿠키에 접근 할 수 없음. 쿠키 조작방지설정.
 */
