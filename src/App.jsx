import "./App.css";
import Filter from "./Components/Filter/Filter";
import Navbar from "./Components/Navbar/Navbar";
import Center from "./Components/Center/Center";
function App() {
  return (
    <>
      <div className="Container">
        <section className="Navbar">
          <div style={{ width: "60px" }}></div>

          <Navbar />
        </section>
        <section className="mainContent">
          <section className="centerPart">
            <Center />
          </section>
          <section className="rightPart">
            <Filter />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
