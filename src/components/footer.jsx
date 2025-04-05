import React, { useState } from "react";
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
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Products from "./Products";

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

// New styled components for form
const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #000;
  }
`;

const SubscribeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const FormMessage = styled.div`
  margin-top: 10px;
  padding: 8px;
  text-align: center;
  border-radius: 4px;
  font-size: 14px;

  &.success {
    background-color: #d4edda;
    color: #155724;
  }

  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;

// Get a selection of top categories and products for the footer
const getTopCategories = (count = 5) => {
  return Products.filter(
    (category) => category.category !== "packaging-by-style"
  ).slice(0, count);
};

const Footer = () => {
  const topCategories = getTopCategories();
  const year = new Date().getFullYear();

  // State for form handling
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: "",
  });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus({ success: false, error: false, message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xdkewqqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, formType: "newsletter" }),
      });

      if (response.ok) {
        setFormStatus({
          success: true,
          error: false,
          message: "Thank you for subscribing to our newsletter!",
        });
        setEmail("");
        setName("");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setFormStatus({
        success: false,
        error: true,
        message: "There was an error submitting the form. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <FooterContainer>
      <CompanyInfoColumn>
        <LogoContainer>
          <Link to="/">
            <img src="/images/logo.svg" alt="Pack it Perfect Logo" />
          </Link>
        </LogoContainer>

        <ContactInfo>
          <a href="mailto:sales@packageitperfect.com">
            sales@packageitperfect.com
          </a>
          <TelephoneContact />
          <address>
            128 City Road, London,
            <br />
            United Kingdom, EC1V 2NX
          </address>
        </ContactInfo>

        <SocialIcons>
          <a
            href="https://www.facebook.com/profile.php?id=61574096784137"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Pack it Perfect on Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/pack.itperfect"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Pack it Perfect on Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/packageitperfect"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Pack it Perfect on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </SocialIcons>
      </CompanyInfoColumn>

      <FooterColumn>
        <FooterHeading>Categories</FooterHeading>
        <FooterList>
          <li>
            <Link to="/category/packaging-by-style">By Style</Link>
          </li>
          <li>
            <Link to="/category/packaging-by-style">By Material</Link>
          </li>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Popular Products</FooterHeading>
        <FooterList>
          <li>
            <Link to="/category/Gifts-and-Souvenirs-Boxes">Gift Boxes</Link>
          </li>
          <li>
            <Link to="/category/jewelry-packaging">Jewelry Packaging</Link>
          </li>
          <li>
            <Link to="/category/Clothing-and-Apparel-Boxes">
              Clothing Boxes
            </Link>
          </li>
          <li>
            <Link to="/category/Fast-Food-Packaging">Food Packaging</Link>
          </li>
          <li>
            <Link to="/category/Medical-Devices-Boxes">Medical Packaging</Link>
          </li>
          <li>
            <Link to="/category/Custom-Made-Boxes">Custom Made Boxes</Link>
          </li>
          <li>
            <Link to="/category/Beauty-and-Cosmetics-Packaging">
              Cosmetics Packaging
            </Link>
          </li>
          <li>
            <Link to="/category/Beverage-Custom-Boxes">Beverage Packaging</Link>
          </li>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Customer Support</FooterHeading>
        <FooterList>
          <li>
            <Link to="/faq">Frequently Asked Questions</Link>
          </li>
          <li>
            <Link to="/get-a-quote">Request a Quote</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Packaging Blog</Link>
          </li>
        </FooterList>
      </FooterColumn>

      <FooterColumn>
        <FooterHeading>Success Stories</FooterHeading>
        <FooterList>
          <li>
            <Link to="/case-study/harrods">Harrods</Link>
          </li>
          <li>
            <Link to="/case-study/royal-ascot">Royal Ascot</Link>
          </li>
        </FooterList>

        <NewsletterContainer>
          <FooterHeading>Newsletter</FooterHeading>
          <NewsletterContent>
            <p>
              Subscribe to our newsletter for packaging tips and special offers.
            </p>
            <NewsletterForm onSubmit={handleSubscribe}>
              <FormInput
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Name for newsletter"
              />
              <FormInput
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email for newsletter subscription"
                required
              />
              <SubscribeButton type="submit" disabled={submitting}>
                {submitting ? "Subscribing..." : "Subscribe"}
                <FontAwesomeIcon icon={faPaperPlane} />
              </SubscribeButton>
              {formStatus.success && (
                <FormMessage className="success">
                  {formStatus.message}
                </FormMessage>
              )}
              {formStatus.error && (
                <FormMessage className="error">
                  {formStatus.message}
                </FormMessage>
              )}
            </NewsletterForm>
          </NewsletterContent>
        </NewsletterContainer>
      </FooterColumn>

      <BottomFooter>
        <Copyright>
          © {year} Pack it Perfect Custom Boxes. All rights reserved.
        </Copyright>
        <PaymentIcons>
          <img
            src="/images/paymentimages/bacs.webp"
            alt="BACS Payment Accepted"
          />
          <img src="/images/paymentimages/paypal.png" alt="PayPal Accepted" />
          <img
            src="/images/paymentimages/strip.png"
            alt="Stripe Payments Accepted"
          />
          <img
            src="/images/paymentimages/wise1.png"
            alt="Wise Transfers Accepted"
          />
        </PaymentIcons>
      </BottomFooter>
    </FooterContainer>
  );
};

export default Footer;
