import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <h2>Todo Application</h2>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/info">Info</Link></li>
    </ul>
  </div>
)

export default Header;