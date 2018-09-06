import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Programs from "./Programs";
import Contact from "./Contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    return (
      <div id="navigation-div">
        <main id="nav">
          <ul className="navigation-list" role="navigation">
            <li>
              <Link to="/">CodeCamp</Link>
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon="home" /> Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon="user" /> About Us
              </Link>
            </li>
            <li>
              <Link to="/programs">
                <FontAwesomeIcon icon="list" /> Our Programs
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <FontAwesomeIcon icon="phone" /> Contact Us
              </Link>
            </li>
          </ul>
        </main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Navbar;
