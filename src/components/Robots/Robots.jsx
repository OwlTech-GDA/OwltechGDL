import React from "react";
import "./Robots.css";
import frame from "../../assets/frame.png";

export default function Robots() {
  return(
    <div className="robotsWrapper">
      <div className="topFrame">Conoce a los robots</div>
      <div style={{backgroundImage:`url(${frame})`}} className="designFrame" />
      
    
    </div>
  ) 
}
