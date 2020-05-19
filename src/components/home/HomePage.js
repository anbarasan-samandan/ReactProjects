import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron bg-warning">
    <h1>Anbu Course Tracker</h1>
    <p className="font-italic">Knowledge is power!</p>
    <Link to="about" className="btn btn-primary btn-lg btn-dark">
      Learn more
    </Link>
  </div>
);

export default HomePage;
