import PropTypes from "prop-types";

import logo from "./assets/logo-tuhoc.png";

import { data } from "../data.js";
function Header() {
  return (
    <>
      <header>
        <img src={logo} alt="Tự Học" />
        <h1>React Tuhoc.cc</h1>
        <p>
          Học React - Khám phá cách xây dựng ứng dụng linh hoạt, hiện đại, và
          đầy sáng tạo!
        </p>
      </header>
    </>
  );
}
// sử dụng thông thường
function MainContent1(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </li>
  );
}
// sử dụng destructuring để giảm thiểu gọi props
function MainContent({ image, title, desc }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
}
// sử dụng propTypes để kiểm tra kiểu dữ liệu của props
// để khỏi cảnh báo lỗi
MainContent1.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

function App() {
  console.log(data);

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent
              image={data[0].image}
              title={data[0].title}
              desc={data[0].desc}
            />
            {/* sử dụng toán tử sprea để trải các thuộc tính của một object ra cho nhanh */}
            <MainContent {...data[1]} />
            <MainContent {...data[2]} />
            <MainContent {...data[3]} />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
