import { useRef, useState} from "react";
import "./Members.css";
import MemberPhoto from "../../assets/ejemMember.png";

export default function Members() {
  const containerRef = useRef(null);
  const dotsCarrousel = [0, 1, 2, 3, 4, 5, 6];
  const [members, setMembers] = useState([0, 1, 2, 3, 4, 5, 6]);

  const [page, setPage] = useState(0);
  const [handlerPage, setHanlderPage] = useState(0);
  const transitionStep = window.innerWidth < 1119 ? 8 : 33.33;
  const [translationTotal, setTranslationTotal] = useState(0);
  const transformStyle = window.innerWidth < 1119 ? `translateY(${translationTotal}%)` : `translateX(${translationTotal}%)`;



  const handleCarrousel = (value) => {
    const copyMembers = [...members];
    const newValue = page + value;

    if (newValue > dotsCarrousel.length - 1) {
      setPage(0);
    } else if (newValue < 0) {
      setPage(dotsCarrousel.length - 1);
    } else {
      setPage(newValue);
    }

    if (members[0] == members[handlerPage] && value < 0) {
      const elementToPush = members[dotsCarrousel.length - 1];
      copyMembers.pop();
      copyMembers.unshift(elementToPush);
      delayTranslation(-1);
      setHanlderPage(0);
    } else if (
      members[dotsCarrousel.length - 1] == members[handlerPage + 2] &&
      value > 0
    ) {
      const elementToPush = members[0];
      copyMembers.shift();
      copyMembers.push(elementToPush);
      delayTranslation(1);
      setHanlderPage(handlerPage);
    } else {
      handleTransition(value);
      setHanlderPage(handlerPage + value);
    }

    setMembers([...copyMembers]);
  };

  const delayTranslation = (symbol) => {
    containerRef.current.style.transition = "none";
    containerRef.current.style.transform = window.innerWidth < 1119 ? `translateY(${translationTotal + transitionStep * symbol}%)` : `translateX(${translationTotal + transitionStep * symbol}%)`;
    window.innerWidth < 1119 ? containerRef.current.offsetHeight : containerRef.current.offsetWidth;
    
    containerRef.current.style.transition = "transform 0.75s";
    setTimeout(() => {
      containerRef.current.style.transform = window.innerWidth < 1119 ? `translateY(${translationTotal}%)` : `translateX(${translationTotal}%)`;
    }, 10);
    window.innerWidth < 1119 ? containerRef.current.offsetHeight : containerRef.current.offsetWidth;
  };

  const handleTransition = (value) => {
    containerRef.current.style.transition = "transform 0.75s";
  setTranslationTotal(translationTotal + transitionStep * -value);
    ;
  };

  return (
    <div className="memebers-body">
      <header>
        <p>¿Quienes somos?</p>
      </header>
      <div className="members-wrapper">
        <div className="carrousel-controllers">
          <div onClick={() => handleCarrousel(-1)}>{"<"}</div>
          {dotsCarrousel.map((i) => {
            return <div key={i}>{page == i ? "•" : "◦"}</div>;
          })}
          <div onClick={() => handleCarrousel(1)}>{">"}</div>
        </div>
        <div
          className="members-list"
          ref={containerRef}
          style={{ transform: transformStyle }}
        >
          {members.map((item) => {
            return <Member item={item} key={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

const Member = ({ item }) => {
  return (
    <div className="member-body">
      <div className="member-description-wrapper">
        <div className="member-description">
          <p className="member-name">{item}</p>
          <p className="member-rol">Rol</p>
        </div>
      </div>
      <img src={MemberPhoto} />
    </div>
  );
};


