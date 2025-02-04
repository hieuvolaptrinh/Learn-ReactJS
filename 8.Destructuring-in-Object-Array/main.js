/*
1. Desrtucturing là một tính năng quan trọng, cho phép bạn trích xuất dữ liệu từ arrays hoặc objects một cách dê dàng và ngắn gọn.
với Array: Trích xuất dữ kiệu từ mảng dựa trên vị trí inđẽ
với Object: Trích xuất dữ liệu từ object dựa trên tên thuộc tính (property name)
*/

// 2. destructuring Arrays
// giả sử chúng ta có một mảng như sau:
const userName = ["Toàn ", "hà ", "Huy"];
// lấy theo cách bình thường
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3); // Toàn  hà  Huy
// nhưng nếu muốn sử dụng destructuring , ta sẽ viết ngắn gọn hơn như sau
const [user4, user5, user6] = userName;
console.log(user4, user5, user6); // Toàn  hà  Huy

// 2.2 có thể bỏ qua phần tử không muốn lấy
const [, user7, user8] = userName;
console.log(user7, user8); // hà  Huy

// 2.3 destructuring với giá trị mặt định
const [user9, user10, user11, user12 = "hiếu đz oke nhâ"] = userName;
console.log(user9, user10, user11, user12); // Toàn  hà huy  hiếu dz oke nhâ

// 2.4 destructuring với rest parameter
const [user13, ...rest] = userName;
console.log(user13);
console.log(rest); // [ 'hà ', 'Huy' ]

// 3. destructuring Objects
const user = {
  name: "Toàn",
  age: 20,
};

// nếu muốn lấy ra các thuộc tính trong Object, ta sẽ viết như sau:
const { name, age } = user;
console.log(name, age); // Toàn 20

// 3.2 đổi tên biến khi destructuring Object
const { name: ten1, age: age1 } = user;
console.log(ten1, age1); // Toàn 20

// 3.3 destructuring với giá trị mặt định
const { name: ten2, age: age2, address = "Hà Nội" } = user;
console.log(ten2, age2, address); // Toàn 20 Hà Nội

// 3.4 dustructuring với rest parameter
const { name: ten3, ...rest1 } = user;
console.log(ten3); // Toàn
console.log(rest1); // { age: 20 }
