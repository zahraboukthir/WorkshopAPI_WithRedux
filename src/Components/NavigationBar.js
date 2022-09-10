import React from "react";
import { Link } from "react-router-dom";
import "./test.css";
const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="l" to="/">Home</Link>
        </li>
        <li>
          <Link to="/recieps">Recieps List</Link>
        </li>
        <li>
          <Link to="/movies">Movies List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
