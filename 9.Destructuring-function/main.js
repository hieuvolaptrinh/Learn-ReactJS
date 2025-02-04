const donHang = {
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 500000,
};
const donHang2 = {
  maDonHang: 111,
  tienTe: "USD",
  tongTien: 123,
};
//1. không sử dụng destructuring
function xuLyDonHang(a) {
  const maDonHang = a.maDonHang;
  const tienTe = a.tienTe;
  const tongTien = a.tongTien;
  console.log(`mã dơn hàng : ${maDonHang}`);
  console.log(`tiền tệ : ${tienTe}`);
  console.log(`tổng tiền : ${tongTien}`);
}

xuLyDonHang(donHang);
// 2. xử dụng Destrucuring

function xuLyDonHang2({ maDonHang, tienTe, tongTien }) {
  console.log(`mã dơn hàng : ${maDonHang}`);
  console.log(`tiền tệ : ${tienTe}`);
  console.log(`tổng tiền : ${tongTien}`);
}
xuLyDonHang2(donHang);
// 2. xử dụng Destrucuring với giá trị mặt định

function xuLyDonHang3({ maDonHang = 0, tienTe = "VND", tongTien = 0 }) {
  console.log(`mã dơn hàng : ${maDonHang}`);
  console.log(`tiền tệ : ${tienTe}`);
  console.log(`tổng tiền : ${tongTien}`);
}
xuLyDonHang3({ maDonHang: 0 });

// 4. sử dụng rest parameter
function xuLyDonHang4({ maDonHang, ...rest }) {
  console.log(`mã dơn hàng : ${maDonHang}`);
  console.log(rest);
}
xuLyDonHang4({
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 500000,
  ngayMua: "2021-07-20",
  nguoiMua: "Toàn",
});

// sử dụng bí danh
function xuLyDonHang5({ maDonHang: ma, ...rest }) {
  console.log(`mã dơn hàng : ${ma}`);
  console.log(rest);
}
xuLyDonHang5({
  maDonHang: 101,
  tienTe: "VND",
  tongTien: 500000,
  ngayMua: "2021-07-20",
  nguoiMua: "Toàn",
});
