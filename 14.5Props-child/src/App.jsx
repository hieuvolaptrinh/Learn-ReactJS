import Header from "./components/Header/Header.jsx";
import { data } from "../data.js";
import { MainContent } from "./components/MainContent/MainContent.jsx";
import TabButton from "./components/TabButton.jsx";
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
        <section id="examples">
          <h2>Components</h2>
          <menu>
            {/* <TabButton>State</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton> */}
            <TabButton batKy="State"></TabButton>
            <TabButton batKy="JSX"></TabButton>
            <TabButton batKy="Components"></TabButton>
            <TabButton batKy="Props"></TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
