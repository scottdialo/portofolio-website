import React from "react";
import "../darkmode/darkmode.css";
import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../context";

function Darkmode() {
  const theme = useContext(ThemeContext);

  const handleclick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="darkmode">
      <img src={Sun} alt="sun-icon" className="d-icon" />
      <img src={Moon} alt="moon-icon" className="d-icon" />
      <button
        className="d-button"
        onClick={handleclick}
        style={{ left: theme.state.Darkmode ? 0 : 45 }}
      ></button>
    </div>
  );
}

export default Darkmode;
