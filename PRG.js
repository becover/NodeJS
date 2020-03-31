const http = require("http");
const querystring = require("querystring");

const movieList = [{ title: "스타워즈4", director: "조지루커스" }];

const server = http
  .createServer((req, res) => {
    if (req.method.toLowerCase() === "post") {
      addNewMovie(req, res);
    } else {
      showList(req, res);
    }
  })
  .listen(3000);

const showList = (req, res) => {
  res.writeHeader(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.write(`
    <html>
      <meta charset='UTF-8'>
      <body>
        <h2>Favorite Movie</h2>
        <div>
          <ul>
          ${movieList
            .map(item => {
              return `<li>${item.title} : ${item.director}</li>`;
            })
            .join("")}
          </ul>
        </div>
        <form method='post' action='.'>
          <h3>새 영화 입력</h3>
          <p><input type='text' name='title' placeholder='영화제목' /></p>
          <p><input type='text' name='director' placeholder='감독' /></p>
          <input type='submit' value='upload' />
        </form>
      </body>
    </html>
  `);
  res.end();
};

const addNewMovie = (req, res) => {
  let body = "";
  req.on("data", chunk => {
    body = body + chunk;
    console.log(body);
  });
  req.on("end", () => {
    const data = querystring.parse(body);
    console.log(data);
    const { title, director } = data;
    movieList.push({ title, director });
    // res.end("Success");
    res.statusCode = 302;
    res.setHeader("Location", ".");
    res.end();
  });
};
