

export const Contact = () => {
  return (
    <div className="whole">
      
      <div className="contact">
        <h1>Get in Touch</h1>
        <h5>We'd love to hear from you! Whether you have questions about our courses, services, or partnerships, feel free to contact us.</h5>
      </div>
        <div className="emergency">
          <h1> <i className="bi bi-telephone-plus"></i>Emergency Contcts</h1>
          <div className="emergency-contact">
            <div>
             <h4> <i className="bi bi-threads-fill"></i> Address</h4>
             <h4>Enugu Nigeria</h4>
            </div>

            <div>
             <h4> <i className="bi bi-telephone-plus"></i> Phone</h4>
             <h4> +234 8108659756</h4>
             <h4>OR +234 7010323003</h4>
            </div>

            <div>
             <h4> <i className="bi bi-info-square"></i> Info</h4>
             <h4> info@goprotech.com</h4>
            </div>

            <div>
              <h4> <i className="bi bi-globe2"></i> Website</h4>
              <h4>www.goprotech.com</h4>
            </div>

          </div>
        </div>
      
        
      <div className="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>we love to hear from you</h2>
          <input type="text" placeholder="Your Name"/>
          <input type="text" placeholder="E-mail"/>
          <input type="text" placeholder="Subject"/>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">submit</button>
        </form>
        
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