import React from "react";
import { Route, Routes } from "react-router-dom";
import Service from "./Service";
import Portfolia from "./Portfolia";
import About from "./About";
import Team from "./Team";
import Contact from "./Contact";
import Home from "./Home";

function Index() {
  return (
    <div>
      
      <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<Service />}></Route>
        <Route path="/portfolia" element={<Portfolia />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default Index;