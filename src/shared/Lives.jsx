import styled from "styled-components";

// Estilos del componente
const LivesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

// Componente
export default function Lives({ count }) {
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