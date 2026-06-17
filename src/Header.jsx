import { Link } from "react-router-dom";
import { useState } from "react";
import imgg from "./image/img-g.jpg";
import "./HeaderGo.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="gopro">
      <img src={imgg} alt="GoPro" />

      {/* Hamburger Icon */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="fas fa-bars"></i>
      </div>

      {/* Navbar */}
      <ul className={menuOpen ? "Navbar active" : "Navbar"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};