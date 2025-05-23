import React from "react";

function Card({ word, isFlipped, isGuessed, onClick }) {
  return (
    <div
      className={`AppCard ${isFlipped || isGuessed ? "flipped" : ""} ${
        isGuessed ? "guessed" : ""
      }`}
      onClick={onClick}
      style={{
        width: "100px",
        height: "150px",
        margin: "10px",
        backgroundImage: "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
        borderRadius: "20px",
        cursor: "pointer",
        perspective: "1000px",
        position: "relative",
        transition: "all 0.3s",
      }}
    >
      <div
        className="AppCardStyled"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#1a1a1a",
          borderRadius: "20px",
          backfaceVisibility: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "all 0.3s",
        }}
      ></div>
      <div
        className="AppCardValue"
        style={{
          display: isFlipped || isGuessed ? "block" : "none",
          color: "#fff",
          position: "absolute",
          top: "50px",
          left: 0,
          textAlign: "center",
          width: "100%",
          transform: "rotateY(180deg)",
          backfaceVisibility: "hidden",
        }}
      >
        {word}
      </div>
    </div>
  );
}

export default Card;
