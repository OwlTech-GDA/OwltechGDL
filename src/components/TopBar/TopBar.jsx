import "./TopBar.css";
import Owltech from "../../assets/Logo 2.png";

export default function TopBar({ refsObj }) {
  const scrollToSection = (ref) => {
    if (ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }, 100); // Adjust the delay as needed
    }
  };

  return (
    <div className="topbar-body">
      <ul>
        <li>
          <img src={Owltech} className="logo-topbar" />
        </li>
        <li onClick={() => scrollToSection(refsObj.whatIs)}>
          ¿Qué es OwlTech?
        </li>
        <li>Misión/Visión</li>
        <li onClick={() => scrollToSection(refsObj.robomaster)}>
          ¿Qué es Robomaster?
        </li>
        <li onClick={() => scrollToSection(refsObj.members)}>
          ¿Quiénes somos?
        </li>
        <li onClick={() => scrollToSection(refsObj.robots)}>
          Conoce a los robots
        </li>
        <li>Sponsors</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}
