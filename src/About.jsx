import img2 from "./image/img-3.jpg";
import img4 from "./image/img-4.jpg";
import img5 from "./image/img-5.jpg";
import img6 from "./image/img-6.jpg";

import imgq from "./image/img-q.jpg";
export const About = () => {
  return (
    <div className="whole">
     

      <div className="pic">
       <img src={imgq} alt="GoPro" />
        <div className="pic-dev">
          <h1>Who we are?</h1>
          <h2>Gopro-tech.</h2>
          <h5>GoPro Tech is a technologydriven platform dedicated to empowering individuals with the skills and knowledge needed to succed in the digital world. We provide pactical learning experience, hands-on projects and expert guidiance to help aspiring delevopers grow with confidence </h5>
          <br />
          <h5>Our goal is to make technology education simple, accesible, and engaging for everyone, regardless of their background or experience level</h5>
          <marquee bgcolor="#ccc" loop="-1" scrollamount="5"  width="100%" >CODE ALONG WITH GOPROTECH, WE GIVE THE BEST</marquee>
        </div>
      </div>
       
        <div className="Rev">
        <h1>Our Vision</h1>
        <h5>To become a leading technology learning platform that inspires an empoers the next genertion of developers, innovators, and digital creators</h5>
      </div>


      <div className="excel-1">
        <h1>Our Core Value</h1>
        <h5>What we produce in the compny</h5>
        <div className="excel">
          <div className="excel-ex">
            <h2>Excellence</h2>
            <p>We are committed to dlivering high-quality education, resources, and support that help learners achieve their goals and reach their full potential.</p>
          </div>
          <div  className="excel-ex">
            <h2>Collaboration</h2>
            <p>We believe that lerning is stronger when people work together, share knowledge, and support one nanother in their growth journey</p>
          </div>
          <div  className="excel-ex">
            <h2>Continuos Learning</h2>
            <p>Technology evolves every dy, and we encourage a mindset of lifelong learning, curiosity, and contant improvement to stay ahead in the digital world</p>
          </div>
          <div  className="excel-ex">
            <h2>Innovation</h2>
            <p>We embrace creativity and continuously explore new technologies an ideas to provide moder, effective, and engaing learning experience four community.</p>
          </div>
        </div>
      </div>

      <div className="about-general">
        <h1>Leadership Team</h1>
        <p>Meet the exports driving Gopr-Tech</p>
        <div className="card-ocontiner">

          <div className="text">
            <h1>Desmond</h1>
          </div>
            
          <div className="text-1">
           <h1>Michelle</h1>
          </div>

          <div  className="text-2">
           <h1>EZE</h1>
          </div>
  
          <div className="text">
            <h1>CJ</h1>
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
    </div>
  )
}

