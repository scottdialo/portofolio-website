import React, { useContext } from "react";
import Copyright from "./components/footer/Copyright";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Darkmode from "./components/darkmode/darkmode";
import { ThemeContext } from "./components/context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Darkmode />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
