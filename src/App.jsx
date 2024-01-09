import { useState } from "react";
import Header from "./components/Header";
import Pinpoint from "./components/Pinpoint";
import ListAction from "./components/ListAction";
import Create from "./components/Create";
import Manager from "./components/Manager";
import Analyze from "./components/Analyze";
import Collaborate from "./components/Collaborate";
import Learn from "./components/Learn";
import BarSection from "./components/BarSection";
import Quote from "./components/Quote";
import InLastYear from "./components/InLastYear";
import JoinBar from "./components/JoinBar";
import FooterWidget from "./components/FooterWidget";
import SideFooter from "./components/SideFooter";

function App() {
  return (
    <div>
      <div className="site-container">
        <Header />
        <Pinpoint />
        <ListAction />
        <Create />
        <Manager />
        <Analyze />
        <Collaborate />
        <Learn />
        <BarSection />
        <Quote />
        <InLastYear />
        <JoinBar />
      </div>
      <FooterWidget/>
      <SideFooter/>
    </div>
  );
}

export default App;
