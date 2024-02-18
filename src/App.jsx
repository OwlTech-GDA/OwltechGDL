import { useState } from "react";
import "./App.css";
import WhatIs from "./components/WhatIs/WhatIs";
import TopBar from "./components/TopBar/TopBar";
import MisionVision from "./components/MisionVision/MisionVision";
import Robomaster from "./components/Robomaster/Robomaster";
import Members from "./components/Members/Members";
import Robots from "./components/Robots/Robots";
import Sponsors from "./components/Sponsors/Sponsors";
// import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <TopBar />
      <WhatIs />
      {/* <MisionVision />
      <Robomaster /> */}
      <Members />
      {/* <Robots />
      <Sponsors />
      <Contact /> */}
    </>
  );
}

export default App;
