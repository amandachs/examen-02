import React, { useEffect, useState } from "react";
import Card from "./Card";
import Vidas from "./Vidas";
import Parejas from "./Parejas";
import Reinicio from "./Reinicio";

const shuffle = (array) => {
  return array
    .flatMap((word) => [word, word])
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const Motor = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [vidas, setVidas] = useState(5);

  // cargar palabras al iniciar
  useEffect(() => {
    iniciarJuego();
  }, []);

  const iniciarJuego = async () => {
    const res = await fetch(
      "https://random-word-api.herokuapp.com/word?number=6&lang=es"
    );
    const words = await res.json();
    setCards(shuffle(words));
    setFlipped([]);
    setGuessed([]);
    setVidas(5);
  };

  const handleCardClick = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      guessed.includes(index)
    )
      return;

    const nuevosVolteados = [...flipped, index];
    setFlipped(nuevosVolteados);

    if (nuevosVolteados.length === 2) {
      const [i1, i2] = nuevosVolteados;
      if (cards[i1] === cards[i2]) {
        setGuessed((prev) => [...prev, i1, i2]);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setVidas((prev) => prev - 1);
        }, 1000);
      }
    }
  };

  return (
    <main style={{ display: "flex" }}>
      {/* Panel lateral */}
      <section id="AppControlPanel">
        <Vidas vidas={vidas} />
        <Parejas encontradas={guessed.length / 2} total={cards.length / 2} />
        <Reinicio onRestart={iniciarJuego} />
      </section>

      {/* Cartas */}
      <section
        id="AppCards"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {cards.map((word, index) => (
          <Card
            key={index}
            word={word}
            isFlipped={flipped.includes(index)}
            isGuessed={guessed.includes(index)}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </section>
    </main>
  );
};

export default Motor;
