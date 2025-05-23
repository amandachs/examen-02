import React from "react";

function Vidas({ vidas }) {
  return (
    <div>
      <h2>Vidas:</h2>
      <div id="health">{"❤️".repeat(vidas)}</div>
    </div>
  );
}

const styles = {
  health: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Vidas;
