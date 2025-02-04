// cách 1 : khai báo hàm, biến , class rồi mới export
// const myVar = 10;

// function myFunction() {
//   console.log("đây là hàm ");
// }

// export { myVar, myFunction };

// cách 2: export tại nơi khai báo
export const myVar = 10;

export function myFunction() {
  console.log("đây là hàm ");
}

// file có một export default
let df2 = "đây là biến default 2 trong named.js";

export default df2;
