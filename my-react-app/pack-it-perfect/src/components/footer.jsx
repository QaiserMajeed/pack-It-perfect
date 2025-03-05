import React from 'react';

const Footer = () => {
  return (
    <footer className="footer row">
      <div className="footer-column company-info col-md-2 col-sm-6">
        <div className="logo row">
          <a className="navbar-brand" id="navbarbrand2" href="#">
            <img src="/images/svgviewer-output (2).jpg" alt="Company Logo" />
          </a>
        </div>

        <div className="contact-info row">
          <p style={{ fontSize: '13px' }}> Contact@Packitperfectcustomboxes.co.uk</p>
          <p>020 3332 0061</p>
          <p>
            128 City Road, London,<br />United Kingdom, EC1V 2NX
          </p>
        </div>

        <div className="social-icons row">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>

      <div className="footer-column col-md-2 col-sm-6">
        <h3>Categories</h3>
        <ul>
          <li><a href="#">By Industry</a></li>
          <li><a href="#">By Style</a></li>
          <li><a href="#">By Material</a></li>
        </ul>
      </div>

      <div className="footer-column col-md-2 col-sm-6">
        <h3>Top Products</h3>
        <ul>
          <li><a href="#">Gifts and Souvenirs Boxes</a></li>
          <li><a href="#">Jewelry Packaging</a></li>
          <li><a href="#">Clothing and Apparel Boxes</a></li>
          <li><a href="#">Food Packaging</a></li>
          <li><a href="#">Medical Devices Boxes</a></li>
          <li><a href="#">Custom Made Boxes</a></li>
          <li><a href="#">Beauty & Cosmetics</a></li>
          <li><a href="#">Beverages Packaging</a></li>
        </ul>
      </div>

      <div className="footer-column col-md-2 col-sm-6">
        <h3>Support</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Request Quote</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">Artwork Guidelines</a></li>
          <li><a href="#">FeedBack</a></li>
        </ul>
      </div>

      <div className="footer-column col-md-2 col-sm-6">
        <h3>Success Stories</h3>
        <ul>
          <li><a href="#">Harrods</a></li>
          <li><a href="#">Royal Ascot</a></li>
        </ul>
        <div className='row'>
          <div className="newsletter-icon col">
            <h3>Newsletter</h3>
          </div>
          <div className="newsletter col">
            <p>Subscribe to our newsletter.</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bottom-footer row">
        <div className="copyright col">
          © 2024 Pack it Perfect Custom Boxes. All rights reserved.
        </div>
        <div className="payment-icons col">
          <img src="/images/paymentimages/bacs.webp" alt="Stripe" />
          <img src="/images/paymentimages/paypal.png" alt="PayPal" />
          <img src="/images/paymentimages/strip.png" alt="Stripe" />
          <img src="/images/paymentimages/wise1.png" alt="Wise" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
