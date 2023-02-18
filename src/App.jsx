import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import About from "./components/About";
export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
