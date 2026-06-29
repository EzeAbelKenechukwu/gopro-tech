import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imgg from "./image/img-g.jpg";
import "./HeaderGo.css";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
  setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="gopro">
      <img src={imgg} alt="GoPro" />

      {/* Desktop Navbar */}
      {!isMobile && (
        <ul className="Navbar">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <button>Login</button>
        </ul>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <ul className="mobileNavbar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button>Login</button>
        </ul>
      )}
    </div>
  );
};