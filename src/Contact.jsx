
import "./contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <div className="contact-page page-shell">
      <section className="contact-hero">
        <div className="contact-hero-copy">
          <span className="section-label">Contact Us</span>
          <h1>Let’s start a conversation about your next step.</h1>
          <p>
            Whether you want to enroll in a program, ask about our services, or discuss a partnership,
            our team is ready to help.
          </p>
        </div>
        <div className="contact-hero-card">
          <h3>Office hours</h3>
          <p>Monday - Saturday</p>
          <p>10:00 AM - 6:00 PM</p>
          <p>Enugu, Nigeria</p>
        </div>
      </section>

      <section className="contact-layout">
        <div className="contact-card">
          <h2>Reach us directly</h2>
          <ul>
            <li><i className="bi bi-telephone-plus"></i> +234 8108659756</li>
            <li><i className="bi bi-telephone-plus"></i> +234 7010323003</li>
            <li><i className="bi bi-envelope"></i> info@goprotech.com</li>
            <li><i className="bi bi-geo-alt"></i> 562 Eha-lumona Road, Agbamere, Enugu</li>
          </ul>
        </div>

        <form className="contact-form">
          <span className="section-label">Leave a message</span>
          <h2>We would love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea rows="6" placeholder="How can we help?"></textarea>
          <button type="submit">Send Message</button>
        </form>
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
          <a href="https://wa.me/2348108659756" target="_blank" rel="noopener noreferrer">
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
          <p><strong>Address:</strong> 562 Eha-lumona Road, Street 32, Agbamere</p>
          <p><strong>Phone:</strong> +234 8108659756 / +234 7010323003</p>
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
