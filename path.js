const path = require("path");

const string = __filename;
//path.sep: 경로의 구분자입니다. Windows는 \, POSIX는 /입니다.
console.log("path.sep:", path.sep);
//path.delimiter: 환경 변수의 구분자입니다. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있습니다. Windows는 세미콜론(;)이고 POSIX는 콜론(:)입니다.
console.log("path.delimiter:", path.delimiter);
console.log("------------------------------");
//path.dirname(경로): 파일이 위치한 폴더 경로를 보여줍니다.
console.log("path.dirname():", path.dirname(string));
//path.extname(경로): 파일의 확장자를 보여줍니다.
console.log("path.extname():", path.extname(string));
// path.basename(경로, 확장자): 파일의 이름(확장자 포함)을 보여줍니다. 파일의 이름만 표시하고 싶다면 basename의 두 번째 인자로 파일의 확장자를 넣어주면 됩니다.
console.log("path.basename():", path.basename(string));
console.log("path.basename():", path.basename(string, path.extname(string)));
console.log("------------------------------");
//path.parse(경로): 파일 경로를 root, dir, base, ext, name으로 분리합니다.
console.log("path.parse()", path.parse(string));
//path.format(객체): path.parse()한 객체를 파일 경로로 합칩니다.
console.log(
  "path.format():",
  path.format({
    dir: "C:\\users\\blabla",
    name: "path",
    ext: ".js"
  })
);
//path.normalize(경로): /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환해줍니다.
console.log(
  "path.normalize():",
  path.normalize("C://users\\\\blabla\\path.js")
);
console.log("------------------------------");
//path.isAbsolute(경로): 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려줍니다.
console.log("path.isAbsolute():", path.isAbsolute("C:\\"));
console.log("path.isAbsolute():", path.isAbsolute("./home"));
console.log("------------------------------");
//path.relative(기준경로, 비교경로): 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려줍니다.
console.log(
  "path.relative():",
  path.relative("C:\\users\\blabla\\path.js", "C:\\")
);
//path.join(경로, ...): 여러 인자를 넣으면 하나의 경로로 합쳐줍니다. 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리해줍니다.
console.log(
  "path.join():",
  path.join(__dirname, "..", "..", "/users", ".", "/blabla")
);
//path.resolve(경로, ...): path.join()과 비슷하지만 차이가 있습니다.path.resolve는 /를 만나면 절대경로로 인식해서 앞의 경로를 무시하고, path.join은 상대경로로 처리합니다
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "users", ".", "/blabla")
);
/**
 * 가끔 Windows에서 POSIX 스타일 path를 사용할 때가 있고, 그 반대일 때도 있습니다. 이러한 경우 Windows에서는 path.posix.sep이나 path.posix.join() 같이 사용하면 되고, POSIX에서는 path.win32.sep이나 path.win32.join() 같이 사용하면 됩니다.
 */
