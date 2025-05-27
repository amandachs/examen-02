import React from "react";
import { createGlobalStyle } from "styled-components"; //Aplica un estilo global

import Header from "./shared/Header";
import Engine from "./shared/Engine";

// Estilos de la página global
const Style = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    width: 100%; /* Asegura que ocupe todo el ancho */
  }
  body {
    background: #212121;
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

// Componente global de la página (une el encabezado y estilos con el motor)
function App() {
  return (
    <>
      <Style />
      <Header />
      <Engine />
    </>
  );
}

export default App;