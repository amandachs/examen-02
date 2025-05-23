import React from "react";

function Encabezado() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Encuentra la pareja</h1>
    </header>
  );
}

const styles = {
  header: {
    background:
      "linear-gradient(90deg, rgba(42,123,155,1) 0%, rgba(176,150,0,1) 100%)",
    height: "150px",
    color: "#fff",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    margin: 0,
  },
};

export default Encabezado;
