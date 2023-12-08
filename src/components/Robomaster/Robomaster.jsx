import React from "react";
import "./Robomaster.css";

export default function Robomaster() {
  return (
    <div style={{backgroundColor: "#34052F", width:"100%", height:"100vh",color:"white"}}>
      <div className="superiorImg" style={{ backgroundImage: `url("src/assets/2.png")`}}>
        <div className="title" id="title" style={{opacity:1}}>¿Qué es robomaster?</div>
        <div className="description">Cada año, DJI organiza una competencia en la que los equipos participantes diseñan y construyen robots 
        con funciones diversas para competir en un campo de batalla. En esta competencia, los equipos controlan sus robots para atacar a los 
        robots y la base del equipo contrario utilizando proyectiles. Al final del enfrentamiento, el equipo que tenga más puntos restantes 
        en su base gana.</div>
        <div className="bottomImg" style={{ backgroundImage: `url("src/assets/2.png")`}}></div>

      </div>


    </div>
  );
}
