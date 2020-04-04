const buffer = Buffer.from("나를 바꿔 보시오");
//from(문자열) : 문자열->버퍼로 변환. length은 버퍼의 크기. 바이트 단위
console.log("frmo():", buffer);
console.log("length:", buffer.length);
//버퍼->문자열로 변환. base6s나hex를 인자값으로 넣으면 해당 인코딩으로도 변환 할 수 있다.
console.log("toString():", buffer.toString());

const array = [Buffer.from("A"), Buffer.from("B"), Buffer.from("C")];
const buffer2 = Buffer.concat(array);
console.log("concat():", buffer2.toString());
//alloc(바이트) : 빈 버퍼를 생성. 인자 값만큼의 크기의 버퍼가 만들어진다.
const buffer3 = Buffer.alloc(5);
console.log("alloc():", buffer3);
