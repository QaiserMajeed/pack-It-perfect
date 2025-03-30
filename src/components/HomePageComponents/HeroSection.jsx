import React from "react";
import styled from "styled-components";

const HeroSectionWrapper = styled.div`
  padding: 3rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const HeroRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 2rem;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const CategoryLabel = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #f8f8f8;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;

  span {
    color: #666;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    background-color: #000;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const HeroTitle = styled.h1`
  margin: 0 0 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const BrandedText = styled.span`
  color: #000;
`;

const HeroDescription = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

const FeatureItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;

  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #000;
    font-weight: bold;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  background-color: #000;
  color: white;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(0, 0, 90, 0.9);
    color: white;
  }
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const RatingText = styled.span`
  margin-right: 1rem;
`;

const RatingStars = styled.div`
  display: flex;
`;

const Star = styled.span`
  color: #ff6600;
  margin-right: 0.2rem;
`;

// Image Slider Styled Components
const SliderContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`;

const SlidesTrack = styled.div`
  display: flex;
  width: 400%;
  animation: slideShow 10s linear infinite;

  @keyframes slideShow {
    0%,
    23% {
      transform: translateX(0);
    }
    25%,
    48% {
      transform: translateX(-25%);
    }
    50%,
    73% {
      transform: translateX(-50%);
    }
    75%,
    98% {
      transform: translateX(-75%);
    }
    100% {
      transform: translateX(-75%);
    }
  }
`;

const Slide = styled.div`
  width: 25%;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const HeroSection = () => {
  // Image paths for the slider
  const sliderImages = [
    "/images/product-slides2-homepage/homepageslider/slide1.jpg",
    "/images/product-slides2-homepage/homepageslider/slide2.jpg",
    "/images/product-slides2-homepage/homepageslider/slide3.jpg",
    "/images/product-slides2-homepage/homepageslider/slide1.jpg", // Repeated to ensure smooth transition
  ];

  return (
    <HeroSectionWrapper>
      <div className="container">
        <HeroRow>
          <HeroContent>
            <CategoryLabel>
              <span>CUSTOM PACKAGING BOXES</span>
            </CategoryLabel>
            <HeroTitle>
              Your <BrandedText>One-Stop</BrandedText> Destination For Custom
              Boxes and Packaging Needs!
            </HeroTitle>
            <HeroDescription>
              In The Dynamic UK Market, We Stand Out With Our Extensive
              Collection Of Bespoke Cosmetics And Packaging.
            </HeroDescription>
            <FeaturesList>
              <FeatureItem>Produced In United Kingdom</FeatureItem>
              <FeatureItem>Delivery within 6 to 10 working days</FeatureItem>
            </FeaturesList>
            <ActionButton href="/get-a-quote">Get A Free Quote</ActionButton>
            <RatingRow>
              <RatingText>
                See what our clients are saying! With 4.5 Social Media Platforms
                Rating :
              </RatingText>
              <RatingStars>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star style={{ opacity: 0.5 }}>★</Star>
              </RatingStars>
            </RatingRow>
          </HeroContent>

          {/* Slider Component */}
          <SliderContainer id="hero-slider">
            <SlidesTrack>
              {sliderImages.map((image, index) => (
                <Slide key={index} id={`slide${index + 1}`}>
                  <img
                    src={image}
                    alt={`Custom Packaging Slide ${index + 1}`}
                  />
                </Slide>
              ))}
            </SlidesTrack>
          </SliderContainer>
        </HeroRow>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
