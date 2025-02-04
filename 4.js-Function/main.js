// function declaration
function xinChao() {
  console.log("Xin chào");
}
xinChao();
function xinChao2(userName) {
  console.log("Xin chào" + userName);
}

xinChao2("hiếu võ");
xinChao2("hiếu võ");
function tich(a = 1, b) {
  return a * b;
}
let kq = tich(2, 3);
console.log(kq);

function xinChao3(userName = "No Name") {
  console.log("Xin chào " + userName);
}
xinChao3();

console.log(tich(undefined, 9));

// function expression
let tong = function (a, b) {
  return a + b;
};

console.log(tong(2, 100));

// arrow function
let multiplyAndArrow = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return product + sum;
};

let kq4 = multiplyAndArrow(4, 5);

// khi thân hàm chỉ có một lệnh duy nhất
let nhan = (a, b) => a * b;

let kq5 = nhan(4, 5);
console.log(kq5);

// khi trả về một đối tượng
// let person = (ten, tuoi) => {
//   return {
//     ten: ten,
//     tuoi: tuoi,
//   };
// };
let person = (ten, tuoi) => ({ ten: ten, tuoi: tuoi });

console.log(person("hiếu", 20));
