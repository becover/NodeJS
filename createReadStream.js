const fs = require("fs");
//createReadStream(읽을 파일 경로, 옵션 객체)으로 읽기 스트림을 만들어준다. highWaterMark옵션은 버퍼의 크기(바이트 단위)를 정할수 있다. 기본값은 64kb.
const readStream = fs.createReadStream("./readme3.txt", { highWaterMark: 16 });
const data = [];

readStream.on("data", chunk => {
  data.push(chunk);
  console.log("data:", chunk, chunk.length);
});

readStream.on("end", () => {
  console.log("end:", Buffer.concat(data).toString());
});

readStream.on("error", err => {
  console.log("error:", err);
});
