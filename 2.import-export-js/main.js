//  1. lấy một phần tử cần thiết
// import { myVar } from "./named.js";
// console.log(myVar); // 10

// 2. lấy chỉ một số phần tử cần thiết
// import { myVar, myFunction } from "./named.js";
// myFunction(); // đây là hàm
// console.log(myVar); // 10

// 3. lấy tất cả
import * as named from "./named.js";

console.log(named.myVar); // 10

named.myFunction(); // đây là hàm
console.log(named.df2); // undefined   // không thể lấy được biến default từ file named.js vì import * as named chỉ lấy các biến được export

import df2, { myVar, myFunction } from "./named.js";
console.log(df2); // đây là biến default 2 trong named.js

// 4. import default
// import df from "default.js";
// console.log(df); // 10

import { total } from "./default.js";

console.log(total(1, 2));

// 5. đổi tên khi import

// 5.1 đổi tên tùy ý khi import default
import tuyY from "./named.js";
console.log(tuyY); // đây là biến default 2 trong named.js

// 5.2 đổi tên tùy ý khi import named
import { myVar as tenMoi } from "./named.js";
console.log(tenMoi); // 10
