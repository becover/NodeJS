const crypto = require("crypto");

const cipher = crypto.createCipher("aes-256-cbc", "열쇠");
let result = cipher.update("암호화할 문장", "utf8", "base64");
result += cipher.final("base64");
console.log("암호화:", result);

const decipher = crypto.createDecipher("aes-256-cbc", "열쇠");
let result2 = decipher.update(result, "base64", "utf8");
result2 += decipher.final("utf8");
console.log("복호화:", result2);

/**
 * 
 • crypto.createCipher(알고리즘, 키): 암호화 알고리즘과 키를 넣어줍니다. 암호화 알고리즘은 aes-256-cbc를 사용했습니다. 다른 알고리즘을 사용해도 됩니다. 사용 가능한 알고리즘 목록은 crypto.getCiphers()를 하면 볼 수 있습니다.

 • cipher.update(문자열, 인코딩, 출력 인코딩): 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣어줍니다. 보통 문자열은 utf8 인코딩을, 암호는 base64를 많이 사용합니다.

 • cipher.final(출력 인코딩): 출력 결과물의 인코딩을 넣어주면 암호화가 완료됩니다.

 • crypto.createDecipher(알고리즘, 키): 복호화할 때 사용합니다. 암호화할 때 사용했던 알고리즘과 키를 그대로 넣어주어야 합니다.

 • decipher.update(문자열, 인코딩, 출력 인코딩): 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣어줍니다. createCipher의 update()에서 utf8, base64 순으로 넣었다면 createDecipher의 update()에서는 base64, utf8 순으로 넣으면 됩니다.

 • decipher.final(출력 인코딩): 복호화 결과물의 인코딩을 넣어줍니다.
 */
