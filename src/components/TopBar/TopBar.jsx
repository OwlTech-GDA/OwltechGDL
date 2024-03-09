import React from "react";
import "./TopBar.css";
import Owltech from "../../assets/Logo 2.png";

export default function TopBar() {
  return (
    <div className="topbar-body">
      <ul>
        <li>
          <img src={Owltech} className="logo-topbar" />
        </li>
        <li>¿Qué es OwlTech?</li>
        <li>Misión/Visión</li>
        <li>¿Qué es Robomaster?</li>
        <li>¿Quiénes somos</li>
        <li>Conoce a los robots</li>
        <li>Sponsors</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}
