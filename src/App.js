import "./styles.css";
import Encabezado from "./shared/Encabezado";
import Vidas from "./shared/Vidas";
import Parejas from "./shared/Parejas";
import Reinicio from "./shared/Reinicio";
import Card from "./shared/Card";
import Motor from "./shared/Motor";

export default function App() {
  return (
    <body>
      <Encabezado />
      <main>
        <section id="AppCards"></section>
        <Card />
        <section id="AppControlPanel">
          <Vidas />
          <Parejas />
          <Reinicio />
        </section>
      </main>
      <script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/toastify-js"
      ></script>
      <script src="js/index.js" type="module"></script>
    </body>
  );
}
