import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer";

import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Navbar />
    </Router>
    <h1>This is the App Component</h1>
    <Footer />
  </div>
);

export default App;
