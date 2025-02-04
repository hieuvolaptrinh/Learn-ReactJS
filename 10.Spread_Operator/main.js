// 1. spread operator với mảng
let soThich = ["đọc sách", "nghe nhạc", "chơi game"];
// sở thích mới muốn thêm
const soThichMoi = ["di du Lịch", "xem phim"];
soThich = [...soThich, "abc", ...soThichMoi];
console.log(soThich); // [ 'đọc sách', 'nghe nhạc', 'chơi game', 'abc', [ 'di du Lịch' ] ]

// 2. spread operator với object
let user = {
  id: 1,
  name: "Toàn",
  emai: "toan@gmail.com",
  role: "user",
};

let updates = {
  address: "Hà Nội",
  role: "admin",
};

// ghi đè giá trị role cũ thì nó sẽ lấy giá trị mới
user = { ...user, ...updates };
console.log(user);
