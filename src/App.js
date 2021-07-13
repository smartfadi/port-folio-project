import Header from "./components/Header/Header";
import NavBarTop from "./components/NavBar/NavBarTop";
import Particles from "react-particles-js";
import "./App.css";
function App() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            Number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "f9ab00",
              },
            },
          },
        }}
      />
      <NavBarTop />
      <Header />
    </div>
  );
}

export default App;
