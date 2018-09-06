import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
    </Router>
    <Footer />
  </div>
);

export default App;
