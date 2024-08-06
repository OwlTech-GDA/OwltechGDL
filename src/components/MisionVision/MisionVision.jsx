import React, { useEffect, useState } from "react";
import "./MisionVision.css";

const MenuOptions = {
  MISION: 0,
  VISION: 1,
};

export default function MisionVision() {
  const [option, setOption] = useState(MenuOptions.MISION);

  return (
    <div className="misionVision-body">
      <MisionView option={option} setOption={setOption} />
      <VisionView option={option} setOption={setOption} />
    </div>
  );
}

const MisionView = ({ option, setOption }) => {
  return (
    <div
      className={`mision-body ${option == MenuOptions.MISION && "activate"}`}
      style={{ backgroundImage: `url("src/assets/MisionBg.jpg")` }}
    >
      <div className="mision-content">
        <header>
          <p className="missionTitle">Misión</p>
        </header>
        <article>
          <p className="missionText">
            Impulsar una generación de jóvenes con pensamiento crítico y
            científico que logren encontrar soluciones a los retos tecnológicos
            del futuro, fomentando proyectos donde el colectivo estudiantil sea
            protagonista.
          </p>
        </article>
        <div
          className="arrow"
          style={{ backgroundImage: `url("src/assets/arrow.png")` }}
          onClick={() => setOption(MenuOptions.VISION)}
        />
      </div>
      <div className="blackBg" />
    </div>
  );
};

const VisionView = ({ option, setOption }) => {
  return (
    <div
      className={`mision-body ${option == MenuOptions.VISION && "activate"}`}
      style={{
        backgroundImage: `url("src/assets/VisionBg.jpg")`,
        position: "absolute",
        top: 0,
      }}
    >
      <div className="mision-content">
        <div
          className="arrow left"
          style={{ backgroundImage: `url("src/assets/arrow.png")` }}
          onClick={() => setOption(MenuOptions.MISION)}
        />
        <header>
          <p className="missionTitle">Visión</p>
        </header>
        <article>
          <p className="missionText">
            Nuestra visión es formar a profesionistas sobresalientes con base en
            experiencias vivenciales. Buscamos competir en RoboMaster China en
            la categoría 3v3 con un equipo altamente competitivo y creativo,
            impulsado por la innovación y la excelencia técnica.
          </p>
        </article>
      </div>
      <div className="blackBg" />
    </div>
  );
};
