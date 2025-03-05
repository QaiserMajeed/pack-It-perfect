import React from "react";
import styled from "styled-components";

const SectionContainer = styled.div`
  padding: 4rem 0;
  background-color: #f5f5f5;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff3b30;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SectionDescription = styled.p`
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const BenefitIcon = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    height: 60px;
    width: auto;
  }
`;

const BenefitTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const BenefitText = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const ClientShowcase = styled.div`
  margin-top: 4rem;
`;

const ClientShowcaseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const ClientsImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ClientImage = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  img {
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CompanyBenefitsSection = () => {
  const benefits = [
    {
      icon: "/images/icons/24-7-support.svg",
      title: "Live 24/7 Support",
      text: "Our team is available anytime to answer your questions and provide assistance.",
    },
    {
      icon: "/images/icons/worldwide-shipping.svg",
      title: "Worldwide Shipping",
      text: "We deliver our custom packaging boxes to clients all over the world.",
    },
    {
      icon: "/images/icons/flexible-payment.svg",
      title: "Flexible Payment",
      text: "Multiple payment options available for your convenience.",
    },
    {
      icon: "/images/icons/low-moq.svg",
      title: "Low Minimum Orders",
      text: "Start with as few as 100 units for most of our custom packaging solutions.",
    },
  ];

  const clientImages = [
    "/images/clients/client1.jpg",
    "/images/clients/client2.jpg",
    "/images/clients/client3.jpg",
    "/images/clients/client4.jpg",
  ];

  return (
    <SectionContainer>
      <div className="container">
        <SectionHeader>
          <SectionTitle>
            REASONS WHY ONE STEP CUSTOM BOXES PACKAGING HAS
          </SectionTitle>
          <SectionSubtitle>1,000'S OF SATISFIED CLIENTS!</SectionSubtitle>
          <SectionDescription>
            Find out why OneStepCustomBoxes is the best option for companies.
            USPs like, We are the only packaging maker of choice, from budging
            businesses to well-known brands.
          </SectionDescription>
        </SectionHeader>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIcon>
                <img src={benefit.icon} alt={benefit.title} />
              </BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitText>{benefit.text}</BenefitText>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <ClientShowcase>
          <ClientShowcaseTitle>
            Some of our client's success stories
          </ClientShowcaseTitle>
          <ClientsImagesGrid>
            {clientImages.map((image, index) => (
              <ClientImage key={index}>
                <img src={image} alt={`Client Packaging ${index + 1}`} />
              </ClientImage>
            ))}
          </ClientsImagesGrid>
        </ClientShowcase>
      </div>
    </SectionContainer>
  );
};

export default CompanyBenefitsSection;
