import React from "react";
import styled from "styled-components";

// Estilos del componente
const LivesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Vidas por partida
function Lives({ count }) {
  return (
    <LivesContainer>
      {Array(count)
        .fill("❤️")
        .map((heart, i) => (
          <span key={i}>{heart}</span>
        ))}
    </LivesContainer>
  );
}

export default Lives;