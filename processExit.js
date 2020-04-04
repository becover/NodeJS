let mode = true;
(async () => {
  let result = await new Promise((resolve, reject) => {
    let id = setTimeout(() => {
      if (!mode) {
        process.exit();
      }
      console.log("뭔가출력");
      reject("리젝");
    }, 2000);
    if (mode) {
      setTimeout(() => {
        resolve("리졸");
        clearTimeout(id);
      }, 1000);
    }
  });
  console.log(result);
})();
