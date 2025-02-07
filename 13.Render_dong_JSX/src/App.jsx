import "./App.css";
import demoPicture from "../src/assets/img/bctt.png";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const wellCome = [
  "Chào mừng bạn đến với react",
  "rất vui khi được gặp bạn",
  "Chúc bạn một ngày tốt lành",
];
// hàm random
function ranDomTitle() {
  return Math.floor(Math.random() * wellCome.length);
}

function Header() {
  const title = wellCome[ranDomTitle()];
  return (
    <>
      <h1>{title}</h1>
      <p>
        Hôm nay là : <strong>{today}</strong>. Thời gian hiện tại {""}
        <strong>{time}</strong>
      </p>
    </>
  );
}
const name = "Hiếu Võ";
let isLogedIn = true;
let person = {
  name: "Hiếu Võ",
  age: 100,
};
function DinamicValue() {
  return (
    <>
      <h2>Chào {name}</h2>
      {/*đùng để chèn biểu thức javascript (experssion)*/}
      <p>Kết Quả {1 + 9 + 5}</p>
      {/*không thể chèn đươc câu lệnh "statement" */}
      {/* <p>điều kiện {if(true){"đúng rồi"}}</p> */}
      {/* 3.có thể sử dụng toán tử ternary bên trong thay cho if-else */}
      <p>{isLogedIn ? "bạn đã đăng nhập" : "bạn chưa đăng nhập"}</p>
      <p>
        Tên: {person.name}, tuổi : {person.age}
      </p>
      <img src={demoPicture} alt="" />
    </>
  );
}
function App() {
  return (
    <>
      <Header></Header>
      <DinamicValue></DinamicValue>
    </>
  );
}

export default App;
