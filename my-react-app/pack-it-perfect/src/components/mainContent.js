import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content ">
      {/* Existing Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Your One-Stop Destination For Custom <span style={{ color: 'rgb(0, 0, 90)' }}>Boxes</span> and <span style={{ color: 'rgb(0, 0, 90)' }}>Packaging</span> Needs.</h1>
            <p>In The Dynamic UK Beauty Market, We Stand Out With Our Extensive Collection Of Bespoke Cosmetics And Packaging.</p>
            <a href="#" className="btn btn-lg" style={{ backgroundColor: 'rgb(0, 0, 90)', color: 'white', fontWeight: 'bold' }}>Get Instant Quote</a>
          </div>
          <div className="col-md-6 text-center" id="slider">
            <div className="slides">
              <div id="slide1" className="slide">
                <img src="/images/slide1.webp" alt="Custom Boxes" className="img-fluid" />
              </div>
              <div id="slide2" className="slide">
                <img src="/images/slide2.webp" alt="Custom Boxes" className="img-fluid" />
              </div>
              <div id="slide3" className="slide">
                <img src="/images/slide3.webp" alt="Custom Boxes" className="img-fluid" />
              </div>
              <div id="slide4" className="slide">
                <img src="/images/slide1.webp" alt="Custom Boxes" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section - Client Ratings and Features */}
      <div className="container">
        <h5><b>See what our clients are saying! With 4.5 Social Media Platforms Rating!</b></h5>
        <div className="rating">
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star filled">★</span>
          <span className="star half-filled">☆</span>
        </div>

        <h3><b>YOUR FINAL RESORT FOR OUTSTANDING PACKAGING SOLUTIONS</b></h3>
        <p>Packitperfect is the go-to option for projects because of their excellent customer service and reasonably priced, customizable packaging solutions.</p>

        {/* Features */}
        <div className="row">
          <div className="col-md-2">
            <div className="feature">
              <div className="icon">💵</div>
              <p>No Die &<br />Plate Charges</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature">
              <div className="icon">⏱</div>
              <p>Fastest Turnaround<br />7 to 8 working days</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature">
              <div className="icon">🚚</div>
              <p>Free Shipping<br />all across UK</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature">
              <div className="icon">🔌</div>
              <p>Starting from<br />100 boxes</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature">
              <div className="icon">📦</div>
              <p>Customize Size<br />& Style</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="feature">
              <div className="icon">💻</div>
              <p>Free Designing<br />Assistance</p>
            </div>
          </div>
        </div>

        {/* Products Slider */}
        <div className="products-sliders2">
          <div className="slider-container">
            <div className="slide3">
              <div className="products1">
                <img src="/images/product-slides2-homepage/cerealBoxesSlimSize.webp" alt="Cereals Boxes Slim Size" />
                <button className="btn product-button" type="button">Cereals Boxes Slim Size</button>
              </div>
            </div>
            <div className="slide3">
              <div className="products1">
                <img src="/images/product-slides2-homepage/book mockups.webp" alt="Book Mockups" />
                <button className="btn product-button" type="button">Book Mockups</button>
              </div>
            </div>
            <div className="slide3">
              <div className="products1">
                <img src="/images/product-slides2-homepage/paperboxespackaging.webp" alt="Paper Boxes Packaging" />
                <button className="btn product-button" type="button">Paper Boxes Packaging</button>
              </div>
            </div>
            <div className="slide3">
              <div className="products1">
                <img src="/images/product-slides2-homepage/pillowboxes.webp" alt="Pillow Boxes" />
                <button className="btn product-button" type="button">Pillow Boxes</button>
              </div>
            </div>
            <div className="slide3">
              <div className="products1">
                <img src="/images/product-slides2-homepage/cakeboxes.webp" alt="Cakes Boxes" />
                <button className="btn product-button" type="button">Cakes Boxes</button>
              </div>
            </div>
            <div className="slide3">
              <div className="products1">
                <img src="/images/product-slides2-homepage/Cuuterguider.webp" alt="Cutter Guider" />
                <button className="btn product-button" type="button">Cutter Guider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
