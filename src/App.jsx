import { createRef } from "react";
import "./App.css";
import WhatIs from "./components/WhatIs/WhatIs.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import MisionVision from "./components/MisionVision/MisionVision.jsx";
import Robomaster from "./components/Robomaster/Robomaster.jsx";
import Members from "./components/Members/Members.jsx";
import Robots from "./components/Robots/Robots.jsx";
import Sponsors from "./components/Sponsors/Sponsors.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  const whatIsRef = createRef();
  const misionVisionRef = createRef();
  const robomasterRef = createRef();
  const membersRef = createRef();
  const robotsRef = createRef();
  const contactRef = createRef();

  const refsObj = {
    whatIs: whatIsRef,
    misionVision: misionVisionRef,
    robomaster: robomasterRef,
    members: membersRef,
    robots: robotsRef,
    contact: contactRef,
  };

  return (
    <div className="body">
      <TopBar refsObj={refsObj} />
      <div ref={whatIsRef}>
        <WhatIs />
      </div>
      <div ref={misionVisionRef}>
        <MisionVision />
      </div>
      <div ref={robomasterRef}>
        <Robomaster />
      </div>
      <div ref={membersRef}>
        <Members />
      </div>
      <div ref={robotsRef}>
        <Robots />
      </div>
        {/* <Sponsors /> */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
