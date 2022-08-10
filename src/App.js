import React from "react";
import "./App.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Porfolio from "./components/porfolio/Porfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Porfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
