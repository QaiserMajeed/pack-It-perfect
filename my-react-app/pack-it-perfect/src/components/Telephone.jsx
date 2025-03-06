import React from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

// Styled components
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const PhoneIconCircle = styled.div`
  background-color: #f5f5f5;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`;

const StyledPhoneIcon = styled(FaPhone)`
  font-size: 24px;
  color: #333;
`;

const PhoneText = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhoneTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000;
`;

const PhoneSubtitle = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 4px;
`;

const QuoteSection = styled.div`
  margin-top: 10px;
`;

const QuoteTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #000;
  margin: 0;
`;

// Component
const TelephoneContact = () => {
  const phoneNumber = "020 383 083 19";

  return (
    <ContactSection>
      <PhoneContainer>
        <PhoneIconCircle>
          <StyledPhoneIcon />
        </PhoneIconCircle>
        <PhoneText>
          <PhoneTitle>Call: {phoneNumber}</PhoneTitle>
          <PhoneSubtitle>Call us for free!</PhoneSubtitle>
        </PhoneText>
      </PhoneContainer>

      <QuoteSection>
        <QuoteTitle>Request a Quote</QuoteTitle>
      </QuoteSection>
    </ContactSection>
  );
};

export default TelephoneContact;
