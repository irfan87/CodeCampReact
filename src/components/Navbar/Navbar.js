import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Programs from "./Programs";
import Contact from "./Contact";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/programs">Our Programs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Navbar;
