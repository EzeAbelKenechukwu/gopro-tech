import { Link } from "react-router-dom";
 import imgt from "./image/img-t.jpeg";
import "./partner.css";

export const Partners = () => {
  const whatsappLink =
    "https://wa.me/2347059213866?text=Hello%20GoProTech";

  return (
    <div className="partner-page">
      {/* INTRODUCTION */}
      <section className="partner">
        <div className="part1">
          <h5>PARTNERS</h5>

          <h1>Organisations we work alongside</h1>

          <p>
            We're proud to partner with organisations who share our commitment
            to grounded, human-centred security.
          </p>
        </div>
      </section>

      {/* PARTNER */}
      <section className="partner-card">
        <div className="partner-image">
          <img src={imgt} alt="TerraCyb Consulting" /> 
        </div>

        <div className="partner-info">
          <h2>TerraCyb Consulting</h2>

          <p>
            TerraCyb Consulting is one of the organisations we work alongside
            to promote practical, human-centred security solutions.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="col">
          <h2>GoProTech</h2>

          <p>
            We connect learners, founders, and teams with practical tech
            education and digital solutions.
          </p>

          <p>Build your next skill with confidence.</p>
        </div>

        <div className="col">
          <h2>About</h2>

          <Link to="/about">About Us</Link>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <Link to="/service">Our Programs</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="col">
          <h2>Follow Us</h2>

          <a
            href="https://web.facebook.com/profile.php?id=61567600501806"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i> GoPro
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i> GoProTech
          </a>

          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter-x"></i> GoProTech
          </a>

          <a
            href="https://tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-tiktok"></i> GoPro
          </a>

          <a
            href="https://www.linkedin.com/company/goprotech-limited/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i> GoProTech
          </a>

          <p>Stay updated with the latest</p>
          <p>GoProTech innovations and solutions.</p>
        </div>

        <div className="col">
          <h2>Contact</h2>

          <p>
            <strong>Address:</strong> Opposite St. Michael's Parish,
            Agbamere, Eha-lumona, Nsukka, Enugu State, Nigeria
          </p>

          <p>
            <strong>Phone:</strong> +234 7059213866 / +234 9123230593
          </p>

          <p>
            <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
          </p>
        </div>

        <div className="copyright">
          <p>GoPro-Tech</p>
          <p>© 2026, GOPRO-TECH | LEARN • BUILD • INNOVATION</p>
        </div>
      </footer>
    </div>
  );
};