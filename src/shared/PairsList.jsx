import React from "react";
import styled from "styled-components";

// Estilos del componente
const Pairs = styled.ul`
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
`;

// Lista de parejas hechas durante el juego
function PairsList({ items }) {
  return (
    <Pairs>
      {items.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
    </Pairs>
  );
}

export default PairsList;