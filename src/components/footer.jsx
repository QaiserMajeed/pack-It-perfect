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

// Styled Components - Updated with Atoms style
const FooterContainer = styled.footer`
  background-color: #000000;
  color: white;
  padding: 60px 0 20px;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 95%;
`;

const TopFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  min-width: 150px;
`;

const NewsletterColumn = styled(FooterColumn)`
  grid-column: 1;
  grid-row: 1;

  @media (max-width: 992px) {
    grid-column: span 2;
  }

  @media (max-width: 576px) {
    grid-column: 1;
  }
`;

const FooterHeading = styled.h3`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;
  }

  a {
    color: #f0f0f0;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s ease;
    display: block;
    padding: 2px 0;

    &:hover {
      color: #ffffff;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 15px;

  a {
    display: block;
  }

  img {
    height: 40px;
    width: auto;
    filter: brightness(0) invert(1);
  }
`;

const FooterText = styled.p`
  color: #f0f0f0;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 15px;
  max-width: 400px;
`;

const EmailInput = styled.input`
  flex-grow: 1;
  padding: 12px 16px;
  border: none;
  background-color: #f0f0f0;
  font-size: 14px;
  border-radius: 0;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

const SubscribeButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: none;
  padding: 0 20px;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #333;
  margin: 20px 0;
`;

const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.div`
  font-size: 12px;
  color: #999;
`;
const PaymentIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  img {
    height: 30px;
    width: auto;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;
const BottomLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #999;
    font-size: 12px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: white;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const ContactInfo = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #f0f0f0;

  p {
    margin: 5px 0;
  }

  a {
    color: #f0f0f0;
    text-decoration: none;
    transition: color 0.2s;
    display: block;
    margin-bottom: 5px;

    &:hover {
      color: white;
    }
  }
`;

const FormMessage = styled.div`
  margin-top: 10px;
  padding: 8px;
  font-size: 12px;
  border-radius: 0;

  &.success {
    background-color: #4caf50;
    color: white;
  }

  &.error {
    background-color: #f44336;
    color: white;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email, formType: "newsletter" }),
      });

      if (response.ok) {
        setFormStatus({
          success: true,
          error: false,
          message: "Thank you for subscribing to our newsletter!",
        });
        setEmail("");
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
      <FooterWrapper>
        <TopFooter>
          <NewsletterColumn>
            <LogoContainer>
              <Link to="/">
                <img src="/images/logo.svg" alt="Pack it Perfect Logo" />
              </Link>
            </LogoContainer>
            <FooterText>
              Stay in the know on product releases, founder news, and all things
              Pack it Perfect.
            </FooterText>
            <NewsletterForm onSubmit={handleSubscribe}>
              <EmailInput
                type="email"
                placeholder="Enter email here for updates"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscribeButton type="submit" disabled={submitting}>
                {submitting ? "..." : "|"}
              </SubscribeButton>
            </NewsletterForm>
            {formStatus.success && (
              <FormMessage className="success">
                {formStatus.message}
              </FormMessage>
            )}
            {formStatus.error && (
              <FormMessage className="error">{formStatus.message}</FormMessage>
            )}

            <ContactInfo>
              <a href="mailto:sales@packageitperfect.com">
                sales@packageitperfect.com
              </a>
              <a href="tel:+44 07440189478">+44 (0)744 0189 478</a>
              <address>
                128 City Road, London,
                <br />
                United Kingdom, EC1V 2NX
              </address>
            </ContactInfo>

            <FooterHeading style={{ marginTop: "20px" }}>
              Stay Connected
            </FooterHeading>
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
                href="https://www.linkedin.com/company/package-it-perfect"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Pack it Perfect on LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://twitter.com/packageitperfect"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Pack it Perfect on Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </SocialIcons>
          </NewsletterColumn>

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
                <Link to="/category/Medical-Devices-Boxes">
                  Medical Packaging
                </Link>
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
                <Link to="/category/Beverage-Custom-Boxes">
                  Beverage Packaging
                </Link>
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
            <FooterHeading style={{ marginTop: "20px" }}>
              Success Stories
            </FooterHeading>
            <FooterList>
              <li>
                <Link to="/case-study/harrods">Harrods</Link>
              </li>
              <li>
                <Link to="/case-study/royal-ascot">Royal Ascot</Link>
              </li>
            </FooterList>
          </FooterColumn>
        </TopFooter>

        <Divider />

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
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
