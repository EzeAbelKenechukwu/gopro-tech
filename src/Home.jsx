import img4 from "./image/img-4.jpg";
import img6 from "./image/img-6.jpg";
import img1 from "./image/img-1.jpg";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = () => {
  return (
    <div className="whole">
      <section className="container">
        <div className="hero-content">
          <span className="hero-pill">Future-ready tech education</span>
          <h1>GoPro-Tech</h1>
          <p>
            We deliver modern digital solutions and practical tech training that
            help individuals and businesses grow with confidence.
          </p>
          <h2>Code with GoProTech</h2>

          <div className="hero-actions">
            <Link to="/about">
              <button className="btn">Explore Services</button>
            </Link>
            <Link to="/service">
              <button className="button-2">View Programs</button>
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img src={img1} alt="GoProTech team and technology showcase" />
        </div>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <strong>100%</strong>
          <span>Hands-on learning</span>
        </div>
        <div className="highlight-card">
          <strong>24/7</strong>
          <span>Expert guidance</span>
        </div>
        <div className="highlight-card">
          <strong>10+</strong>
          <span>Practical programs</span>
        </div>
      </section>

      <section className="choosing-1">
        <div className="why-choose-1">
          <h1>Join Our Community</h1>
          <p>
            Become part of a growing network of tech enthusiasts, developers,
            and innovators.
          </p>
        </div>
        <div className="choose-1">
          <div>
            <i className="bi bi-globe"></i>
            <h2>Learn Together</h2>
            <p>
              Access beginner-friendly tutorials, coding resources, and
              step-by-step guidance designed to build lasting technical skills.
            </p>
          </div>
          <div>
            <i className="bi bi-github"></i>
            <h2>Build Real Projects</h2>
            <p>
              Gain hands-on experience through practical projects that strengthen
              your portfolio and prepare you for real opportunities.
            </p>
          </div>
          <div>
            <i className="bi bi-lightning-fill"></i>
            <h2>Grow Your Career</h2>
            <p>
              Receive mentorship, industry insights, and career guidance that help
              you move forward with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="choosing">
        <div className="why-choose">
          <h1>Why Choose GoPro-Tech?</h1>
          <p>The most comprehensive and secure tech learning experience.</p>
        </div>
        <div className="choose">
          <div>
            <h4>Beginner-Friendly Lessons</h4>
            <p>
              Our tutorials break down complex ideas into clear, practical steps.
            </p>
          </div>
          <div>
            <h4>Hands-On Learning</h4>
            <p>
              Build real-world solutions and sharpen your craft with guided
              projects.
            </p>
          </div>
          <div>
            <h4>Modern Technologies</h4>
            <p>
              Stay current with the tools and workflows used by professionals.
            </p>
          </div>
          <div>
            <h4>Expert Guidance</h4>
            <p>
              Get actionable insights and honest support that help you grow.
            </p>
          </div>
        </div>
      </section>

      <section className="ovaer-all">
        <div className="all">
          <h1>Trusted by Growth-Minded Learners</h1>
          <p>See what our community says about the experience.</p>
        </div>
        <div className="rate-container">
          <div>
            <img src={img4} alt="Happy learner testimonial" />
            <ul>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </ul>
            <p>
              "GoPro Tech made learning web development simple, practical, and
              enjoyable. The lessons are clear and easy to follow."
            </p>
            <p>
              By <strong>Eze</strong>
            </p>
          </div>
          <div>
            <img src={img1} alt="Student portfolio success" />
            <ul>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </ul>
            <p>
              "The project-based approach helped me gain real-world experience and
              build confidence in my coding skills."
            </p>
            <p>
              By <strong>Desmond</strong>
            </p>
          </div>
          <div>
            <img src={img6} alt="Community mentorship experience" />
            <ul>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </ul>
            <p>
              "Joining GoPro Tech was one of the best decisions I made. The support,
              mentorship, and resources have strengthened my journey."
            </p>
            <p>
              By <strong>DI</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="ready">
        <h1>Ready to Start Your Coding Journey?</h1>
        <h5>Take the first step toward becoming a skilled developer today.</h5>
        <h5>
          Explore our tutorials, build projects, and unlock your potential with
          GoPro Tech.
        </h5>
        <div className="ready-link">
          <Link to="/about">
            <button className="button">Start Free Trial</button>
          </Link>
          <Link to="/service">
            <button className="button-2">Learn More</button>
          </Link>
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
          <h2>follow us</h2>
          <a href="https:/web.facebook.com/profile.php?id=61567600501806" target="_blank" rel="noopener noreferrer">
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

          <p>Stay updated with the GoproTech technology</p>
          <p>innovations and solution</p>
        </div>

        <div className="col">
          <h2>Contact</h2>
          <p><strong>Address:</strong>562 Eha-lumona Road, Street 32, Agbamere</p>
          <p><strong>Phone:</strong>+123 8108659756 /(or) +123 7010323003</p>
          <p><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
        </div>

        <div className="copyright">
          <p>Gopro-tech</p>
          <p>@ 2026, GOPRO-TECH | LEARN * BUILD * INNOVATION</p>
        </div>
      </footer>

      <div className="whatsapp-container">
        <div className="chat-text">Need help? Chat with us!</div>
        <a href="https://wa.me/2348108659756" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};