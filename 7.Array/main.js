// mảng là một dạng đặt biệt của object, mảng là một tập hợp các giá trị có thể được truy cập thông qua chỉ số.
// mảng được thiết kế để lưu trữ các giá trị theo thứ tự và truy cập bằng chỉ số INDex bắt đầu từ 0
let arr3 = new Array(1, 2, 3, 4, 5); // Tạo mảng với các phần tử

const traiCay = ["cam", "quyt", "mit", "dua", "dua hau"];
console.log(typeof traiCay); // object
console.log(traiCay);
console.log(traiCay[0]);
// 2. mảng lồng nhau và nhiều kiểu dữ liệu
const arr4 = [1, "hello", true, [1, 2, 3], { name: "thanh" }];

// 2.1 truy cập vào mảng lồng nhau
console.log(arr4[3][1]); // 2

// 3. một số phuong thức của mảng
// 3.1 push thêm phần tử vào cuối mảng
traiCay.push("xoai");
console.log(traiCay);
// 3.2 map() duyệt qua từng phần tử cuả mảng và trả về một mảng mới
const so = [1, 2, 3, 4, 5];
const so2 = so.map((item) => item * 2);
console.log(so2);

// biến đổi phần tử của mảng thành đối tượng mới
const so3 = so.map((item) => ({ so: item }));

// 3.3 findIndex() tìm kiếm phần tử trong mảng, trả về chỉ số của phần tử đó (đầu tiên)
const kq = traiCay.findIndex((item) => {
  return item === "xoai";
});
