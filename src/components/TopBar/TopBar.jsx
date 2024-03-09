import "./TopBar.css";
import Owltech from "../../assets/Logo 2.png";

export default function TopBar({ refsObj }) {
  const scrollToSection = (ref, paddingBottom = 0) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      window.scrollTo({
        top: window.scrollY + rect.bottom - window.innerHeight + paddingBottom,
        behavior: "smooth",
      });
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
        <li onClick={() => scrollToSection(refsObj.robots, 100)}>
          Conoce a los robots
        </li>
        <li>Sponsors</li>
        <li>Contacto</li>
      </ul>
    </div>
  );
}
