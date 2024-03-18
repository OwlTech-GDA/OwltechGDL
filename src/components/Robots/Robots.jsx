import "./Robots.css";

export default function Robots() {
  return (
    <div className="robotsWrapper">
      <div className="robots-header">
        <div className="topFrame">Conoce a los robots</div>
        <div
          className="designFrame"
          style={{ backgroundImage: `url("src/assets/1.png")` }}
        />
      </div>
      <div className="allCards">
        <div className="Card">
          <div
            className="robImg"
            style={{ backgroundImage: `url("src/assets/PNG image 6 1.png")` }}
          />
          <div className="CardTextTitle">Hero</div>
          <div className="CardText">Lanza proyectiles de largo alcance.</div>
        </div>
        <div className="Card">
          <div
            className="robImg"
            style={{ backgroundImage: `url("src/assets/PNG image 6 2.png")` }}
          />
          <div className="CardTextTitle">Standard</div>
          <div className="CardText">
            Lanza proyectiles de bajo alcance y es el atacante principal.
          </div>
        </div>
        <div className="Card">
          <div
            className="robImg"
            style={{ backgroundImage: `url("src/assets/PNG image 6 3.png")` }}
          />
          <div className="CardTextTitle">Sentry</div>
          <div className="CardText">Es la última línea de defensa.</div>
        </div>
      </div>
    </div>
  );
}
