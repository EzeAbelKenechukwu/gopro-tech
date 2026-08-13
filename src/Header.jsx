import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import imgg from "./image/img-g.jpeg";
import "./header.css";

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
      <Link to="/" className="brand-link">
        <img src={imgg} alt="GoProTech logo" className="brand-logo" />
      </Link>

      {/* Desktop Navbar */}
      {!isMobile && (
        <ul className="Navbar">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
          <li><Link to="/partners" onClick={closeMenu}>Partners</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
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
      <ul className="mobileNavbar" onClick={closeMenu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Service</Link></li>
         <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      )}
    </div>
  );
};