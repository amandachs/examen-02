import styled from "styled-components";

// Estilos del componente
const Pairs = styled.ul`
  padding: 0;
`;
const ListItem = styled.li`
  list-style: none;
`;

// Componente
export default function PairsList({ items }) {
  return (
    <Pairs>
      {items.map((item, i) => (
        <ListItem key={i}>{item}</ListItem>
      ))}
    </Pairs>
  );
}
