import React from "react";
import styled from "styled-components";
import TelephoneContact from "./Telephone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

// Styled Components
const FooterContainer = styled.footer`
  background-color: #a1a3a5;
  color: black;
  padding: 40px 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 100px;
`;

const FooterColumn = styled.div`
  min-width: 200px;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex: 0 0 calc(50% - 20px);
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    flex: 0 0 100%;
  }
`;

const CompanyInfoColumn = styled(FooterColumn)`
  margin-bottom: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  a {
    display: block;
  }

  img {
    height: 100px;
    width: 200px;
    object-fit: contain;
    margin-left: -20px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #666;

  p {
    margin: 5px 0;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 15px;

  a {
    margin-right: 15px;
    color: #333;
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: #000;
    }
  }
`;

const FooterHeading = styled.h3`
  color: #333;
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 600;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 8px;
  }

  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;

    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }
`;

const NewsletterContainer = styled.div`
  margin-top: 20px;
`;

const NewsletterContent = styled.div`
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }

  input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
  }

  button {
    padding: 8px 15px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 120, 1);
    }
  }
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #666;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const PaymentIcons = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 30px;
    margin-left: 15px;
  }

  @media (max-width: 768px) {
    justify-content: center;

    img {
      margin: 0 7.5px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CompanyInfoColumn>
        <LogoContainer>
          <a href="#">
            <img src="/images/logo.svg" alt="Company Logo" />
          </a>
        </LogoContainer>

        <ContactInfo>
          <p>Contact@Packitperfectcustomboxes.co.uk</p>
          <TelephoneContact />
          <p>
            128 City Road, London,
            <br />
            United Kingdom, EC1V 2NX
          </p>
        </ContactInfo>

        <SocialIcons>
          <a href="#" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" aria-label="Pinterest">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </SocialIcons>
      </CompanyInfoColumn>

      <FooterColumn>
        <FooterHeading>Categories</FooterHeading>
        <FooterList>
          <li>
            <a href="#">By Industry</a>
          </li>
          <li>
            <a href="#">By Style</a>
          </li>
          <li>
            <a href="#">By Material</a>
          </li>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Top Products</FooterHeading>
        <FooterList>
          <li>
            <a href="#">Gifts and Souvenirs Boxes</a>
          </li>
          <li>
            <a href="#">Jewelry Packaging</a>
          </li>
          <li>
            <a href="#">Clothing and Apparel Boxes</a>
          </li>
          <li>
            <a href="#">Food Packaging</a>
          </li>
          <li>
            <a href="#">Medical Devices Boxes</a>
          </li>
          <li>
            <a href="#">Custom Made Boxes</a>
          </li>
          <li>
            <a href="#">Beauty & Cosmetics</a>
          </li>
          <li>
            <a href="#">Beverages Packaging</a>
          </li>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Support</FooterHeading>
        <FooterList>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
          <li>
            <a href="/get-quote"> Quote</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
          <li>
            <a href="#">Testimonial</a>
          </li>
          <li>
            <a href="#">Artwork Guidelines</a>
          </li>
          <li>
            <a href="#">FeedBack</a>
          </li>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Success Stories</FooterHeading>
        <FooterList>
          <li>
            <a href="#">Harrods</a>
          </li>
          <li>
            <a href="#">Royal Ascot</a>
          </li>
        </FooterList>

        <NewsletterContainer>
          <FooterHeading>Newsletter</FooterHeading>
          <NewsletterContent>
            <p>Subscribe to our newsletter.</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </NewsletterContent>
        </NewsletterContainer>
      </FooterColumn>

      <BottomFooter>
        <Copyright>
          © 2024 Pack it Perfect Custom Boxes. All rights reserved.
        </Copyright>
        <PaymentIcons>
          <img src="/images/paymentimages/bacs.webp" alt="BACS" />
          <img src="/images/paymentimages/paypal.png" alt="PayPal" />
          <img src="/images/paymentimages/strip.png" alt="Stripe" />
          <img src="/images/paymentimages/wise1.png" alt="Wise" />
        </PaymentIcons>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
