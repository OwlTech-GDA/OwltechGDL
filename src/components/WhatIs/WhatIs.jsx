import React from "react";
import "./WhatIs.css";
import logo from "../../assets/Logo 1.png";

export default function WhatIs() {
  return (
    <div className="whatis-body">
      <div
        className="img-side"
        style={{ backgroundImage: `url("../../assets/whatit-bg.png")` }}
      >
        <img src={logo} />
      </div>
      <div className="text-side">
        <h2>¿Qué es OwlTech?</h2>
        <p>
          Owltech es un grupo estudiantil que se enfoca en la competencia
          Robomaster en la cual sus miembros pueden desarrollar hábilidades
          relacionadas a los temas robótica, programación, electrónica y
          mecánica
        </p>
      </div>
    </div>
  );
}
