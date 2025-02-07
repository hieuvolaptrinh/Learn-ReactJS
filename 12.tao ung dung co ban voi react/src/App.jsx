import "./App.css";

function HomeWork() {
  return (
    <>
      <h1>Danh sách công việc cả tôi</h1>
      <ul>
        <li>học bài react</li>
        <li>hoàn thành bài tập lập trình</li>
        <li>dọn dẹp bàn làm viêc</li>
      </ul>
      <p>Cố lên ngày mai sẽ tốt hơn thôi</p>
    </>
  );
}
function Header() {
  return (
    <>
      <h2>Chào Mừng đến với thế giới ReactJS @!</h2>
      <p>
        hôm nay là <strong>5/2/2025</strong>. THời gian hiện tại{" "}
        <strong>12:32</strong>
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <HomeWork />
      {/* <h1>Đây là tiêu đề</h1>
      <h3>Đây là tiêu đề cấp 3</h3>
      <Header></Header> */}
    </>
  );
}

export default App;
