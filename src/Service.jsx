
import { Link } from "react-router-dom";
import "./service.css";

const whatsappLink = "https://wa.me/2347059213866";

export const Service = () => {
  return (
    <div className="service-page">
      {/* INTRODUCTION */}
      <div className="serve">
        <div className="Text1">
          <h1>Our Services</h1>

          <p>
            At GoPro Tech, we offer comprehensive technology training and
            digital solutions designed to help individuals, students,
            entrepreneurs, and businesses succeed in today's digital world.
            Our services focus on practical learning, innovation, and
            professional growth.
          </p>

          <p>
            Whether you're looking to start a career in technology, improve
            your digital skills, or grow your business online, we provide the
            expertise and support you need to achieve your goals.
          </p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="rap-up">
        <div className="service-heading">
          <h1>What We Offer In Our Technology Hub / Academy</h1>
          <p>
            Explore our technology training programs and digital services
            designed to help you learn, build, innovate, and grow.
          </p>
        </div>

        {/* WEB DEVELOPMENT */}
        <div className="check">
          <i className="bi bi-code-slash service-icon"></i>
          <h3>Web Development</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn HTML, CSS, JavaScript,
            and modern web technologies.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Build responsive and
            user-friendly websites.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Create interactive web
            applications.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Deploy websites and web
            applications online.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* PROGRAMMING */}
        <div className="check">
          <i className="bi bi-terminal service-icon"></i>
          <h3>Programming</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Understand programming
            fundamentals and logic.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Develop strong
            problem-solving skills.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Learn coding best
            practices.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Build practical,
            real-world applications.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* CYBER SECURITY */}
        <div className="check">
          <i className="bi bi-shield-lock service-icon"></i>
          <h3>Cyber Security</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn cybersecurity
            fundamentals.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Understand how to protect
            systems and networks.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Identify common cyber
            threats and vulnerabilities.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Understand ethical
            cybersecurity practices.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* MOBILE APP */}
        <div className="check">
          <i className="bi bi-phone service-icon"></i>
          <h3>Mobile App Development</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn how mobile
            applications are designed and developed.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Build user-friendly mobile
            interfaces.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Learn modern app
            development tools and technologies.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Understand mobile app
            deployment and publishing.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* UI UX */}
        <div className="check">
          <i className="bi bi-palette service-icon"></i>
          <h3>UI / UX Design</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn user interface design
            principles.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Understand user experience
            and usability.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Create wireframes and
            interactive prototypes.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Design engaging and
            user-friendly digital products.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* GRAPHICS */}
        <div className="check">
          <i className="bi bi-brush service-icon"></i>
          <h3>Graphics & Video Editing</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Create professional graphics
            and visual content.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Edit and produce engaging
            videos.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Learn branding and visual
            storytelling.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Use modern design and
            editing tools.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="check">
          <i className="bi bi-share service-icon"></i>
          <h3>Social Media Management</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Create engaging social media
            content.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Manage social media
            accounts professionally.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Grow and engage online
            communities.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Monitor and analyze social
            media performance.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* DIGITAL MARKETING */}
        <div className="check">
          <i className="bi bi-megaphone service-icon"></i>
          <h3>Digital Marketing</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn SEO fundamentals.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Create effective digital
            marketing campaigns.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Understand content and
            online marketing strategies.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Track and improve campaign
            performance.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* DATA ANALYSIS */}
        <div className="check">
          <i className="bi bi-bar-chart-line service-icon"></i>
          <h3>Data Analysis</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn how to collect and
            organize data.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Analyze data to discover
            valuable insights.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Create charts, reports, and
            dashboards.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Make data-driven decisions
            with confidence.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* ARTIFICIAL INTELLIGENCE */}
        <div className="check">
          <i className="bi bi-robot service-icon"></i>
          <h3>Artificial Intelligence</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Understand the fundamentals
            of artificial intelligence.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Explore machine learning
            concepts.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Learn how to use modern AI
            tools.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Explore real-world
            applications of AI.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* DATA ANALYTICS & DASHBOARDS */}
        <div className="check">
          <i className="bi bi-pie-chart service-icon"></i>
          <h3>Data Analytics & Dashboards</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn data visualization
            techniques.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Build interactive
            dashboards.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Turn raw data into useful
            business insights.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Present data using
            professional charts and reports.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* IT TRAINING */}
        <div className="check">
          <i className="bi bi-tools service-icon"></i>
          <h3>IT Training & Technical Support</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Learn essential computer
            and IT skills.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Receive practical technical
            training.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Get assistance with common
            technical challenges.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Improve your digital
            productivity.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* HOSTING */}
        <div className="check">
          <i className="bi bi-globe2 service-icon"></i>
          <h3>Domain Registration & Web Hosting</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Register professional
            domain names.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Set up reliable web hosting
            services.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Connect domains to websites
            and applications.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Get assistance with website
            deployment.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* BUSINESS EMAIL */}
        <div className="check">
          <i className="bi bi-envelope-at service-icon"></i>
          <h3>Business Email Setup</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Set up professional business
            email addresses.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Connect email to your
            business domain.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Configure email accounts
            across devices.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Improve professional
            communication.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* API */}
        <div className="check">
          <i className="bi bi-braces service-icon"></i>
          <h3>API Development & Integration</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Understand APIs and how
            applications communicate.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Build and integrate APIs
            into applications.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Connect websites and
            applications to external services.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Work with modern API
            development practices.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* IT CONSULTING */}
        <div className="check">
          <i className="bi bi-person-workspace service-icon"></i>
          <h3>IT Consulting</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Get professional technology
            guidance.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Identify technology
            solutions for your business.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Plan and improve your
            digital infrastructure.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Make informed technology
            decisions.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* MAINTENANCE */}
        <div className="check">
          <i className="bi bi-wrench-adjustable service-icon"></i>
          <h3>Website & App Maintenance</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Keep websites and
            applications updated.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Fix technical issues and
            errors.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Improve website performance
            and security.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Provide ongoing technical
            support.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>

        {/* DATA DESIGN */}
        <div className="check">
          <i className="bi bi-database service-icon"></i>
          <h3>Data Design & Management</h3>

          <h5>
            <i className="bi bi-check-circle"></i> Organize and structure
            business data effectively.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Learn database design and
            management.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Improve data accessibility
            and organization.
          </h5>
          <h5>
            <i className="bi bi-check-circle"></i> Maintain accurate and
            reliable data.
          </h5>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <button>
              <i className="bi bi-whatsapp"></i> WhatsApp
            </button>
          </a>
        </div>
      </div>

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
            <strong>Address:</strong>  Opposite St.Michael's Parish, Agbamere, Eha-lumona, Nsukka, Enugu State, Nigeria
          </p>

          <p>
            <strong>Phone:</strong>  +234 7059213866 / +234 9123230593
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

