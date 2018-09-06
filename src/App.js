import React, { Component } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faList,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

library.add(faHome);
library.add(faUser);
library.add(faList);
library.add(faPhone);

const App = () => (
  <div className="app-container">
    <Router>
      <Navbar />
    </Router>
    <Footer />
  </div>
);

export default App;
