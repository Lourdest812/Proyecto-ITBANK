import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import React, { useState } from "react";


function MainPage() {
  const [selectedSection, setSelectedSection] = useState("Inicio");

  return (
    <>
        <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
        <MainSection selectedSection={selectedSection} />
    </>
  );
}

export default MainPage;
