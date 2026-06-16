
import img2 from "./image/img-3.jpg";
import img4 from "./image/img-4.jpg";



import img1 from "./image/img-1.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="whole">
        <div className="container">
          <div>
           <h1>GoPro-Tech</h1>
          <p>
            We Deliver the best. If you can think of it,
            <br />
           We can definitely give it back as you thought of it.
          </p>
          <h2>Code-with-GoproTech</h2>

          <Link to="/about">
            <button className="btn">Check Out</button>
          </Link>
        </div>

        <div>
         <img src={img1} alt="GoPro" />
        </div>
    </div>
      <div className="choosing-1">
        <div className="why-choose-1">
          <h1>Join Our Community</h1>
          <p>Become a part of a growing network of tech enthusiasts, developers, and innovators</p>
        </div>
        <div className="choose-1">
          <div>
            <i className="bi bi-globe"></i>
            <h2>Learn Together</h2>
            <p>Access beginner-friendly tutorials, coding resources, and step-by-step guides designed to help you master mordern web development technologies</p>
          </div>
           <div>
            <i className="bi bi-github"></i>
            <h2>Build Real Projects</h2>
            <p>Gain hands-on experience by working on practical projects that inprove your coding sills and strenthen your portiflio</p>
          </div>
           <div>
            <i className="bi bi-lightning-fill"></i>
            <h2>Grow Your Career</h2>
            <p>Recieve mentorship, industry insights, and career guidiance to help you achieve your goals in technology and software development</p>
          </div>
        </div>
      </div>

      <div className="choosing">
        <div className="why-choose">
          <h1>Why Choose Gopro-Tech?</h1>
          <p>The most comprehensive and secure Tech industry</p>
        </div>
        <div className="choose">
          <div>
            <h4>Beginner-Friendly Lessons</h4>
            <p>Our tutorials are designed to make complex concepts simple and easy to understand</p>
          </div>
           <div>
            <h4>Hands-On Learning</h4>
            <p>Learn by building real projects that improve your kill and strengthen your portfolio</p>
          </div>
           <div>
            <h4>Mordern Technologies</h4>
            <p>Stay updated with the latest web development tools and technologies used by professionals</p>
          </div>
           <div>
            <h4>Expert Guidance</h4>
            <p>Get practical tips, best practices, nd guidaince to help you grow as a developer</p>
          </div>
        </div>
      </div>

    <div className="ovaer-all" >
      <div className="all">
       <h1>Trusted by Industry Leaders</h1>
       <p>See what our clients say about our platform</p>
      </div>
      <div className="rate-container">
        <div>
         <img src={img2} alt="GoPro" />
          <ul>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
          </ul>
          
         <p>"GoPro Tech made learning web development simple and enjoyable. The tutorial are clear, practical, and eay to follow". </p> 
         <p> By <strong>Eze</strong>
          </p>
        </div>
        <div><img src={img1} alt="GoPro" />
          <ul>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
          </ul>
          <p>"The project-based approach helped me gain real-world experience. i now fel more confident in my coding skills and have added several projects to my portfolio."</p> 
          
         <p> By <strong>Desmond</strong>
          </p>
        </div>
        <div>
         <img src={img4} alt="GoPro" />
          <ul>
          <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
          </ul>
         <p>"Joinimg the GoPro Tech community was one of the best decisions i  made. The suppot, mentorship, and learning resources have greatlty improved my development journey</p> 
          <p>
           By <strong>Mich</strong>
            
          </p>
          
        </div>
      </div>
    </div>

    <div>
      <div className="ready">
        <h1>Ready to Start Your Coding Journy</h1>
        <h5>Take the first step toward becoming a skilled developer today.</h5>
        <h5>Explore our tutorials, build projects, and unlock your potential with GoPro Tech. </h5>
        <div className="ready-link">
          <Link to="/about">
            <button className="button">Start free trial</button>
          </Link>
          <Link to="service">
           <button className="button-2">Learn more</button>
          </Link>
        </div>
      </div>

    </div>

      <footer >
        <div className="col">
          <h2>GoproTech</h2>
          <p>We coonect with other techies world wide</p>
          <p>To learn more and resolve issues</p>
        </div>

         <div className="col">
         <h2>About</h2>
         <a href="#">About us</a>
         <a href="#">Delivery Information</a>
         <a href="#">Privacy Policy</a>
         <a href="#">Terms & Condintions</a>
         <a href="#">Contact us</a>
        </div>

        <div className="follow">
          <h2>follow us</h2>
          <a
            href="https:/web.facebook.com/profile.php?id=61567600501806"
            target="_blank"
            rel="noopener noreferrer"
           >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            href="https://wa.me/2348108659756"
            target="_blank"
            rel="noopener noreferrer"
           >
            <i className="bi bi-whatsapp"></i>
          </a>

          <a
            href="https://x.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
           >
           <i className="bi bi-twitter-x"></i>
          </a>

          <a
            href="https://tiktok.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
           >
           <i className="bi bi-tiktok"></i>
          </a>
          
          <a
            href="https://www.linkedin.com/company/goprotech-limited/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
           >
            <i className="bi bi-linkedin"></i>
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
        <div className="chat-text">
          Need help? Chat with us!
        </div>

        <a
          href="https://wa.me/2348108659756"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};