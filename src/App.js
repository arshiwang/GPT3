import React from "react";
import "./App.css";
import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Features,
  Header,
} from "./containers";

const App = () => {
  return (
    <div className="App ">
      <div className="gradient__bg-lefttop">
        <Navbar />
        <Header />
        <Brand />
      </div>
      <div className="gradient__bg-sideways">
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
      </div>
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
