const fs = require("fs");
// fs.access(경로, 옵션, 콜백): 폴더나 파일에 접근할 수 있는지를 체크
fs.access(
  "./folder",
  fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,
  err => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log("폴더 없음");
        //fs.mkdir(경로, 콜백): 폴더를 만드는 메서드
        fs.mkdir("./folder", err => {
          if (err) {
            throw err;
          }
          console.log("폴더 만들기 성공");
          //fs.open(경로, 옵션, 콜백): 파일의 아이디(fd 변수)를 가져오는 메서드. 파일이 없다면 파일을 생성한 뒤 아이디를 가져옴. 가져온 아이디를 사용해 fs.read(), fs.write()를 쓸수있다. 두번째 인자는 동작에 대한 옵션으로 w쓰기,r읽기,a추가하기
          fs.open("./folder/file.js", "w", (err, fd) => {
            if (err) {
              throw err;
            }
            console.log("빈 파일 만들기 성공", fd);
            //fs.rename(기존 경로, 새 경로, 콜백): 파일의 이름을 바꾸는 메서드
            fs.rename("./folder/file.js", "./folder/newfile.js", err => {
              if (err) {
                throw err;
              }
              console.log("이름 바꾸기 성공");
            });
          });
        });
      } else {
        throw err;
      }
    } else {
      console.log("이미 폴더 있음");
    }
  }
);
