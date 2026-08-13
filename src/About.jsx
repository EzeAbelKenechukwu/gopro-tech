import img2 from "./image/img-3.jpg";
import img4 from "./image/img-4.jpg";
import imgd from "./image/img-d.jpeg";
import img6 from "./image/img-6.jpg";
import img88 from "./image/img-88.jpg";
import imgc from "./image/img-c.jpg";
import { Link } from "react-router-dom";
import "./about.css";

export const About = () => {
  return (
    <div className="about-page page-shell">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="section-label">About GoProTech</span>
          <h1>We build confident tech learners and modern digital professionals.</h1>
          <p>
            GoProTech helps students, founders, and teams turn curiosity into real
            capability through practical learning, strong mentorship, and project-based training.
          </p>
          <div className="hero-actions">
            <Link to="/service" className="btn">Explore Programs</Link>
            <Link to="/contact" className="button-2">Contact Us</Link>
          </div>
        </div>
        <div className="about-hero-card">
          <img src={imgc} alt="GoProTech team and learning environment" />
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-card">
          <h3>10+</h3>
          <p>Specialized learning tracks</p>
        </div>
        <div className="stat-card">
          <h3>100%</h3>
          <p>Practical and mentoring-driven</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Community and support access</p>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-panel">
          <h2>Our Mission</h2>
          <p>
            To make technology education accessible, structured, and inspiring for everyone who
            wants to grow in the digital economy.
          </p>
        </div>
        <div className="about-panel">
          <h2>Our Vision</h2>
          <p>
            To become a trusted technology learning partner that empowers the next generation of
            creators, developers, and business leaders.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="about-values-grid">
          <div className="about-panel">
            <h3>Excellence</h3>
            <p>We deliver high-quality training and support that helps learners reach their goals.</p>
          </div>
          <div className="about-panel">
            <h3>Collaboration</h3>
            <p>We believe learning grows stronger when knowledge is shared and applied together.</p>
          </div>
          <div className="about-panel">
            <h3>Innovation</h3>
            <p>We stay current with modern tools and solutions to keep our community future-ready.</p>
          </div>
          <div className="about-panel">
            <h3>Continuous Growth</h3>
            <p>We encourage curiosity, self-improvement, and lifelong learning in every step.</p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-card" style={{ backgroundImage: `url(${imgd})` }}>
            <h3>Desmond</h3>
            <p>Lead Instructor</p>
          </div>
          <div className="team-card" style={{ backgroundImage: `url(${img4})` }}>
            <h3>Michelle</h3>
            <p>Program Designer</p>
          </div>
          <div className="team-card" style={{ backgroundImage: `url(${img2})` }}>
            <h3>Eze</h3>
            <p>Technology Mentor</p>
          </div>
          <div className="team-card" style={{ backgroundImage: `url(${img88})` }}>
            <h3>Mayor</h3>
            <p>Community Lead</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="col">
          <h2>GoproTech</h2>
          <p>We connect learners, founders, and teams with practical tech education and digital solutions.</p>
          <p>Build your next skill with confidence.</p>
        </div>

        <div className="col">
          <h2>About</h2>
          <Link to="/about">About us</Link>
          <a href="#">Delivery Information</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Condintions</a>
          <Link to="/service">Our Programs</Link>
          <Link to="/contact">Contact us</Link>
        </div>

        <div className="col">
          <h2>Follow us</h2>
          <a href="https://web.facebook.com/profile.php?id=61567600501806" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-facebook"> Gopro</i>
          </a>
          <a href="https://wa.me/2347059213866" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-whatsapp"> GoproTech</i>
          </a>
           <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter-x"> GoproTech</i>
          </a>

          <a href="https://tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-tiktok"> Gopro</i>
          </a>
          <a href="https://www.linkedin.com/company/goprotech-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"> GoproTech</i>
          </a>
          <p>Stay updated with the latest</p>
          <p>GoProTech innovations and solutions.</p>
        </div>

        <div className="col">
          <h2>Contact</h2>
          <p><strong>Address:</strong> Opposite St.Michael's Parish, Agbamere, Eha-lumona, Nsukka, Enugu State, Nigeria</p>
          <p><strong>Phone:</strong>  +234 7059213866 / +234 9123230593</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
        </div>

        <div className="copyright">
          <p>Gopro-tech</p>
          <p>@ 2026, GOPRO-TECH | LEARN * BUILD * INNOVATION</p>
        </div>
      </footer>
    </div>
  );
};
