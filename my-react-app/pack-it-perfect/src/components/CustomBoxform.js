import React from 'react';
import { FaCheckCircle, FaFileUpload } from 'react-icons/fa';

const CustomBoxesForm = () => {
  return (
    <div className="container-quote row" >
        
      <h1 style={{marginLeft:'-200px'}}><b>Get a Free Quote</b></h1>
      <div className="form-container row-500">
        <div className="form-section col-md-8">
          <h3><b>Personal Information:</b></h3>
          <div className="form-group ">
            <label htmlFor="FirstName">Fisrt Name *</label>
            <input type="text" id="FirstName" required />
          </div>
          {/* Repeat for other personal information fields */}
          <h3><b>Size:</b></h3>
          <div className="form-group">
            <label htmlFor="sizesuggestion" style={{ marginTop: '20px' }}>Size Suggestions:</label>
            <select id="sizesuggestion">
              <option value="1">size suggestion</option>
              {/* Repeat for other size options */}
            </select>
          </div>
          <h3><b>Material:</b></h3>
          <div className="material-grid">
            /* Repeat for material type, thickness, and coating */
                  </div>
                  <h3><b>Quantity</b></h3>
                  <div className="form-group">
                  <label htmlFor="quantity" style={{ marginTop: '20px' }}>Quantity</label>
                  <input type="text" id="quantity" required />
                  </div>
                  /* Repeat for number of designs and printing sides */
                  <h3><b>Attach Designs</b></h3>
                  <div className="form-group">
                  <input type="file" id="designUpload" name="designUpload" />
                  <button type="button" id="uploadButton" style={{ backgroundColor: 'rgb(0, 0, 90)', color: 'white' }}>
                    <FaFileUpload /> Upload
                  </button>
                  </div>
                  <h3><b>Additional Notes</b></h3>
                  <div className="form-group b4-form-textarea ">
                  <textarea id="additionalNotes" name="additionalNotes" placeholder="Any additional information..." style={{ width: '500px' }}></textarea>
                  </div>
                  <button type="submit" className="submit-button" style={{ backgroundColor: 'rgb(0, 0, 90)', color: 'white', marginLeft: '350px' }}>
                  Submit
                  </button>
        </div>
      <div className="guarantee-section col-md-4">
                  <img src="images/paymentGuarrente/paymentGuarrantue.webp" alt="Shop with Confidence" className="guarantee-image" />
                  <div className="guarantee-grid">
                  {/* Repeat for each guarantee item */}
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Budget-Friendly</h4>
              <p>Premium quality Boxes, Stickers & Tags at affordable prices.</p>
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Endless Choices</h4>
                        <p>Diverse finishes, adhesives, and materials await!</p>
              
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Versatile Designs</h4>
                        <p>Customize your design with multiple artwork options.</p> </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Lightning-Fast Delivery</h4>
                        <p>98% of orders ready within 24 hours!</p>
                  
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Order Flexibility</h4>
                        <p>Get boxes, stickers, and tags in the quantities you need, no minimums!</p>
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Lightning-Fast Delivery</h4>
                        <p>98% of orders ready within 24 hours!</p>
                  
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Free PDF Proofs</h4>
              <p>Approve your design file before printing!</p> 
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Seamless Online Ordering</h4>
                        <p>Order with just a few clicks.</p>
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Try Before You Buy</h4>
              <p>Free sample packs to feel the quality.</p>
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
              <h4>Transparent Pricing</h4>
              <p>No surprises—what you see is what you get!</p>
            </div>
            <div className="guarantee-item">
              <FaCheckCircle />
             <h4>Rapid Dispatch</h4>
                        <p>Orders printed and shipped within days!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-simpletext row" style={{ marginTop: '30px' }}>
        {/* Repeat for all the text sections */}
        <p>Welcome to Pack it Perfect Custom Boxes, where your packaging needs meet unmatched quality and creativity. Discover why choosing us is the perfect step towards achieving your business goals effectively and affordably.</p>
      </div>
      <div className="image-container row" id="imageconttainer2">
        <img src="images/backgroungImages/images.jpeg" alt="boxes" className="background-image" id="backgroundimage" />
        <div id="hero-content" className="overlay-content col-md-12">
          <h1 style={{ color: 'white' }}>Quality Custom Boxes, Affordable Prices</h1>
          <p>From your order to your front door, our team manages it all to make things simpler for you</p>
          <div className="button-container" id="herobuttonconatainer">
            <a href="#" id="heroButton" className="button">Contact Us Today</a>
            <a href="#" id="heroButton" className="button">Get Free Quote</a>
          </div>
        </div>
      </div>
      <div className="feedback-section row">
        <div className="feedback-text col-md-4">Give us a <span>Feedback</span></div>
        <button className="review-button col-md-3">Write a Review</button>
      </div>
    </div>
  );
};

export default CustomBoxesForm;