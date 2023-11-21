import { useState } from "react";
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
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      {/* <TopBar />
      <WhatIs />
      <MisionVision />*/
      <Robomaster />
      /*<Members /> */}
      <Robots />
      {/* <Sponsors />
      <Contact /> */}
    </div>
  );
}

export default App;
