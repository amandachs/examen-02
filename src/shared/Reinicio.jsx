import React, { useState } from "react";

function Reinicio() {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseStyle = {
    fontSize: "18px",
    display: "inline-block",
    outline: 0,
    border: 0,
    cursor: "pointer",
    willChange: "box-shadow, transform",
    background:
      "radial-gradient(100% 100% at 100% 0%, #89e5ff 0%, #5468ff 100%)",
    boxShadow:
      "0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%)",
    padding: "0 2em",
    borderRadius: "0.3em",
    color: "#fff",
    height: "2.6em",
    textShadow: "0 1px 0 rgb(0 0 0 / 40%)",
    transition: "box-shadow 0.15s ease, transform 0.15s ease",
    marginTop: "50px",
    userSelect: "none",
  };

  const hoverStyle = {
    boxShadow:
      "0px 0.1em 0.2em rgb(45 35 66 / 40%), 0px 0.4em 0.7em -0.1em rgb(45 35 66 / 30%), inset 0px -0.1em 0px #3c4fe0",
    transform: "translateY(-0.1em)",
  };

  const activeStyle = {
    boxShadow: "inset 0px 0.1em 0.6em #3c4fe0",
    transform: "translateY(0em)",
  };

  const style = {
    ...baseStyle,
    ...(isHovered ? hoverStyle : {}),
    ...(isActive ? activeStyle : {}),
  };


  return (
    <button
      id="restart"
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      Reiniciar
    </button>
  );
}


export default Reinicio;