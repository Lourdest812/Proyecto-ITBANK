import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import '../css/mainPage.css'

function MainPage() {
  const [selectedSection, setSelectedSection] = useState("Inicio");

  return (
    <>
      <Header />
      <Sidebar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      <MainSection selectedSection={selectedSection} />
      <Footer />
    </>
  );
}

export default MainPage;