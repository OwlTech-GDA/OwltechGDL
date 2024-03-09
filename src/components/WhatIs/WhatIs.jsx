import "./WhatIs.css";
import logo from "../../assets/Logo 1.png";

export default function WhatIs() {
  return (
    <div className="whatis-body">
      <div
        className="img-side"
        style={{ backgroundImage: `url("src/assets/whatit-bg.png")` }}
      >
        <img src={logo} />
        <div className="opacity-bg" />
      </div>
      <div className="text-side">
        <div className="text-wrapper">
          <p className="whatis-title">¿Qué es OwlTech?</p>
          <div />
          <p className="whatis-text">
            Owltech es un grupo estudiantil que se enfoca en la competencia
            Robomaster en la cual sus miembros pueden desarrollar habilidades
            relacionadas a los temas robótica, programación, electrónica y
            mecánica.
          </p>
        </div>
      </div>
    </div>
  );
}
