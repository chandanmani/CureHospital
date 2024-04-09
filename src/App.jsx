import React from "react";
import About from "./Comp/About";
import Details from "./Comp/Details";
import NewDoctor from "./Comp/NewDoctor";
import Treatment from "./Comp/Treatment";
import Footer from "./Comp/Footer";
import Home from "./Comp/Home";
import { Intro } from "./Comp/Intro";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Home />
        <Routes>
          <Route path="/" element={<>
            <Intro />
            <Details />
            <NewDoctor />
            <Treatment />
            <About />
          </>}></Route>
          <Route path="/appointment" element={<Details />}></Route>
          <Route path="/treatment" element={<Treatment />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/doctor" element={<NewDoctor/>}></Route> {/* corrected syntax */}
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
