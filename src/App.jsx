import { useState } from "react";
import "./App.css";
import WhatIs from "./components/WhatIs";
import TopBar from "./components/TopBar";
import MisionVision from "./components/MisionVision";
import Robomaster from "./components/Robomaster";
import Members from "./components/Members";
import Robots from "./components/Robots";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopBar />
      <WhatIs />
      <MisionVision />
      <Robomaster />
      <Members />
      <Robots />
      <Sponsors />
      <Contact />
    </>
  );
}

export default App;
