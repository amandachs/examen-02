function Parejas({ encontradas, total }) {
  return (
    <div>
      <h2>Parejas encontradas:</h2>
      <ul id="gussedWords">
        <li>
          {encontradas} / {total}
        </li>
      </ul>
    </div>
  );
}
export default Parejas;
