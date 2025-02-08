import Header from "./components/Header/Header.jsx";
import { data } from "../data.js";
import { MainContent } from "./components/MainContent/MainContent.jsx";
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
