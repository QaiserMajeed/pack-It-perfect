import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Products from "../components/Products";
import styled from "styled-components";

// Styled Components
// Styled Components
const styleProducts = [
  {
    title: "Die Cut Fittings Box",
    code: "DCF001",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1719226858-300x300-1.png",
    description:
      "Precision-cut boxes with custom fittings for secure product placement, ensuring items stay in place during shipping and presentation.",
    url: "https://onestepcustomboxes.co.uk/die-cut-fittings-box/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star'></i>",
    price: "£0.07",
    oldPrice: "£0.23",
  },
  {
    title: "Grocery Bag Box",
    code: "GBB002",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1722331308-300x300-1.png",
    description:
      "Eco-friendly grocery bag boxes for retail and shopping needs, combining functionality with sustainable design.",
    url: "https://onestepcustomboxes.co.uk/grocery-bag-box/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    price: "£0.06",
    oldPrice: "£0.21",
  },
  {
    title: "Kraft Cupcake Box",
    code: "KCB003",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1722331391-300x300-1.png",
    description:
      "Charming kraft paper boxes designed specifically for cupcakes, combining rustic appeal with practical functionality.",
    url: "https://onestepcustomboxes.co.uk/kraft-cupcake-box/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star'></i>",
    price: "£0.08",
    oldPrice: "£0.24",
  },
  {
    title: "Custom Rakhi Box",
    code: "CRB004",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1722331047-300x300-1.png",
    description:
      "Beautiful custom boxes designed for Rakhi celebrations, perfect for gifting during this special cultural occasion.",
    url: "https://onestepcustomboxes.co.uk/csutom-rakhi-box/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    price: "£0.07",
    oldPrice: "£0.23",
  },
  {
    title: "Tuck Flap Box",
    code: "TFB005",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1722331121-300x300-1.png",
    description:
      "Versatile tuck flap boxes suitable for a wide range of products, offering easy assembly and secure closure.",
    url: "https://onestepcustomboxes.co.uk/tuck-flap-box/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i><i class='far fa-star'></i>",
    price: "£0.06",
    oldPrice: "£0.22",
  },
  {
    title: "Custom Bottle Carrier Boxes",
    code: "BCB006",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1719226878-300x300-1.png",
    description:
      "Sturdy carrier boxes designed for safe transportation of bottles, featuring handles for easy carrying.",
    url: "https://onestepcustomboxes.co.uk/custom-bottle-carrier-boxes/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='far fa-star'></i>",
    price: "£0.08",
    oldPrice: "£0.25",
  },
  {
    title: "Gift Craft Box",
    code: "GCB007",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1722331209-300x300-1.png",
    description:
      "Elegant craft boxes perfect for gifts and special occasions, providing a premium unboxing experience.",
    url: "https://onestepcustomboxes.co.uk/gift-craft-box/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i>",
    price: "£0.07",
    oldPrice: "£0.24",
  },
  {
    title: "Quality Gift Boxes",
    code: "QGB008",
    image:
      "https://onestepcustomboxes.co.uk/wp-content/uploads/2025/01/1722331450-300x300-1.png",
    description:
      "Premium quality gift boxes for special occasions and luxury items, crafted with attention to detail.",
    url: "https://onestepcustomboxes.co.uk/quality-gift-boxes/",
    socialLinks: {
      facebook: "https://www.facebook.com/example",
      instagram: "https://www.instagram.com/example",
      twitter: "https://www.twitter.com/example",
    },
    stars:
      "<i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star'></i><i class='fas fa-star-half-alt'></i>",
    price: "£0.09",
    oldPrice: "£0.26",
  },
];
const ReviewCard = styled.div`
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

// Replace ReviewImage with ReviewIcon
const ReviewIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #d6b996;
  margin-bottom: 1rem;
  height: 100px;
`;

// For FinishOptionImage update
const FinishOptionCard = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

// Replace FinishOptionImage with FinishOptionIcon
const FinishOptionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 180px;
  background-color: #f9f9f9;
  font-size: 4rem;
  color: #333;
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
`;

const BreadcrumbNav = styled.div`
  display: flex;
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #666;
    text-decoration: none;

    &:hover {
      color: rgb(0, 0, 90);
      text-decoration: underline;
    }
  }

  span {
    margin: 0 0.5rem;
  }
`;

const ProductHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductImageSection = styled.div`
  flex: 1;
  background-color: ${(props) => props.bgColor || "#FFE4B5"};
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const ProductInfoSection = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StarRating = styled.div`
  color: #ffd700;
  margin-right: 1rem;
`;

const ReviewCount = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const SocialShareContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ShareButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: rgb(0, 0, 90);
  }
`;

const DescriptionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 2rem;
`;

const QuoteFormContainer = styled.div`
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const QuoteFormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;

  &::placeholder {
    color: #999;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  background-color: white;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  resize: vertical;
  min-height: 100px;
`;

const QuoteButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: rgb(183, 54, 54);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgb(150, 40, 40);
  }
`;

// Enhanced Tab Navigation styles based on the reference images
const TabsContainer = styled.div`
  margin-bottom: 3rem;
`;

const TabNavigation = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 2rem;
  border-bottom: none;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const TabButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${(props) => (props.active ? "#D6B996" : "transparent")};
  border: none;
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? "600" : "500")};
  color: ${(props) => (props.active ? "#333" : "#666")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  min-width: 150px;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.active ? "#D6B996" : "#f1f1f1")};
  }

  @media (max-width: 768px) {
    min-width: auto;
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const TabIcon = styled.i`
  font-size: 1.1rem;
  margin-right: 0.5rem;
`;

// Improved TabContent styling
const TabContent = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  padding: 1rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const TabContentTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
`;

const TabContentDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

// Artwork Guidelines specific components
const ArtworkGuideContainer = styled.div`
  background-color: #fff5f5;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const ArtworkGuideTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.2rem;
`;

const ArtworkGuideDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 2rem;
`;

const ArtworkTemplateImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;

  img {
    max-width: 100%;
    height: auto;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;

const GuidelinesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GuidelineItem = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const GuidelineIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  img {
    max-width: 80%;
    max-height: 80%;
  }
`;

const GuidelineTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.8rem;
`;

const GuidelineText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #666;
`;

// Order Process specific components
const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProcessItem = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
`;

const ProcessNumber = styled.div`
  background-color: #d6b996;
  color: #333;
  font-size: 2.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-width: 150px;
`;

const ProcessContent = styled.div`
  padding: 2rem;
`;

const ProcessTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const ProcessText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
`;

// Specification Table styling
const SpecificationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;

  tr {
    border-bottom: 1px solid #eee;
  }

  th,
  td {
    padding: 1rem;
    text-align: left;
  }

  th {
    font-weight: 600;
    width: 30%;
    color: #333;
    background-color: #f9f9f9;
  }

  td {
    color: #555;
  }

  tr:hover {
    background-color: #f9f9f9;
  }
`;

// Brand section styling
const BrandsContainer = styled.div`
  margin: 4rem 0;
`;

const BrandsSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const BrandsInfo = styled.div`
  flex: 1;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #333;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
  }

  strong {
    display: block;
    margin-bottom: 1.5rem;
  }
`;

const BrandsLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2rem;

  img {
    height: 40px;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;

    &:hover {
      filter: grayscale(0%);
      opacity: 1;
    }
  }
`;

const BrandsShowcase = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  i {
    color: #d6b996;
    font-size: 1.2rem;
  }

  span {
    font-size: 0.95rem;
    color: #333;
  }
`;

// Box style showcase
const BoxStyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const BoxStyleItem = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: contain;
    padding: 1rem;
    background-color: #fff;
  }
`;

const BoxStyleCode = styled.div`
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

const BrandsText = styled.p`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const BrandLogo = styled.img`
  max-height: 40px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const FeatureBoxGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const FeatureBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.iconBg || "rgb(0, 0, 90, 0.1)"};
  color: rgb(0, 0, 90);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const ReviewsContainer = styled.div`
  margin-bottom: 3rem;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;



const ReviewImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ReviewText = styled.p`
  font-size: 0.9rem;
  color: #333;
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

const ReviewerInfo = styled.div`
  font-size: 0.8rem;
  color: #666;
  font-style: italic;
`;

const FinishOptionsContainer = styled.div`
  margin-bottom: 3rem;
`;

const FinishOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;


const FinishOptionImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const FinishOptionInfo = styled.div`
  padding: 1rem;
`;

const FinishOptionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

const FinishOptionDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
`;

const DiscountSection = styled.div`
  background-color: #333;
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  text-align: center;
`;

const DiscountTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const DiscountForm = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const DiscountInput = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
  flex-grow: 1;
`;

const DiscountButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: rgb(183, 54, 54);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgb(150, 40, 40);
  }
`;

const RelatedProductsContainer = styled.div`
  margin-bottom: 3rem;
`;

const RelatedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const RelatedProductCard = styled.div`
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const RelatedProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
`;

const RelatedProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  text-align: center;
`;

const CTASection = styled.div`
  background-color: #f0e1c9;
  padding: 3rem 2rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 3rem;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const CTAText = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  background-color: rgb(0, 0, 90);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 90, 0.9);
  }
`;

const NotFoundContainer = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
`;

const ProductDetails = () => {
  const { categoryName, product } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // State for tabs
  const [activeTab, setActiveTab] = useState("specification");

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    size: "",
    material: "",
    message: "",
  });

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle quote form submission
  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the form data to your backend here
    alert("Your quote request has been submitted. We will contact you soon!");
  };

  // Handle discount form submission
  const handleDiscountSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your discount code has been sent to your email.");
  };

  // Get category and product data
  const filteredCategories = Products?.find(
    (category) => category.category === categoryName
  );

  if (!filteredCategories) {
    return (
      <PageContainer>
        <div className="alert alert-warning">
          <h4>Category Not Found</h4>
          <p>Sorry, we couldn't find this product category.</p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Return to Home
          </button>
        </div>
      </PageContainer>
    );
  }

  const filterProducts = filteredCategories.subProducts?.find(
    (a) => a.title === product
  );

  if (!filterProducts) {
    return (
      <PageContainer>
        <div className="alert alert-warning">
          <h4>Product Not Found</h4>
          <p>Sorry, we couldn't find this product.</p>
          <button
            onClick={() => navigate(`/category/${categoryName}`)}
            className="btn btn-primary"
          >
            View All Products
          </button>
        </div>
      </PageContainer>
    );
  }

  // Function to handle navigation to related product
  const handleRelatedProductClick = (relatedProductTitle) => {
    navigate(`/category/${categoryName}/product/${relatedProductTitle}`);
  };

  return (
    <PageContainer>
      {/* Breadcrumb Navigation */}
      <BreadcrumbNav>
        <a href="/">Home</a>
        <span>/</span>
        <a href={`/category/${categoryName}`}>{filteredCategories.category}</a>
        <span>/</span>
        <span>{filterProducts.title}</span>
      </BreadcrumbNav>

      {/* Product Hero Section */}
      <ProductHero>
        <ProductImageSection bgColor="#FFE4B5">
          <ProductImage src={filterProducts.image} alt={filterProducts.title} />
        </ProductImageSection>

        <ProductInfoSection>
          <ProductTitle>{filterProducts.title}</ProductTitle>

          <RatingContainer>
            <StarRating
              dangerouslySetInnerHTML={{ __html: filterProducts.stars }}
            ></StarRating>
            <ReviewCount>(142 reviews)</ReviewCount>
          </RatingContainer>

          <SocialShareContainer>
            <ShareButton href="#" aria-label="Share on Facebook">
              <i className="fab fa-facebook-f"></i>
            </ShareButton>
            <ShareButton href="#" aria-label="Share on Instagram">
              <i className="fab fa-instagram"></i>
            </ShareButton>
            <ShareButton href="#" aria-label="Share on Twitter">
              <i className="fab fa-twitter"></i>
            </ShareButton>
          </SocialShareContainer>

          <DescriptionTitle>
            Elegant and Sustainable {filterProducts.title} Solutions
          </DescriptionTitle>

          <ProductDescription>
            <p>
              {filterProducts.description ||
                `As a leading name in the UK packaging industry, Pack It Perfect is committed to delivering sustainable, eco-friendly ${filterProducts.title}. We offer high-quality packaging solutions that not only protect your products but also elevate your brand's image. Our team of design specialists uses cutting-edge manufacturing methods to create stunning packaging solutions at cost-effective rates, ensuring you meet both your brand and sustainable goals.`}
            </p>
          </ProductDescription>

          {/* Quote Request Form */}
          <QuoteFormContainer>
            <form onSubmit={handleQuoteSubmit}>
              <QuoteFormGrid>
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <FormInput
                  type="text"
                  name="size"
                  placeholder="Size (cm)"
                  value={formData.size}
                  onChange={handleInputChange}
                />
                <FormSelect
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                >
                  <option value="">Please choose an option</option>
                  <option value="cardboard">Cardboard</option>
                  <option value="kraft">Kraft Paper</option>
                  <option value="corrugated">Corrugated</option>
                  <option value="rigid">Rigid Board</option>
                </FormSelect>
                <FormInput
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  required
                />
              </QuoteFormGrid>

              <FormTextarea
                name="message"
                placeholder="Additional details..."
                value={formData.message}
                onChange={handleInputChange}
              ></FormTextarea>

              <QuoteButton type="submit">GET A QUOTE</QuoteButton>
            </form>
          </QuoteFormContainer>
        </ProductInfoSection>
      </ProductHero>

      {/* Tabs Section */}
      <TabsContainer>
        <TabNavigation>
          <TabButton
            active={activeTab === "specification"}
            onClick={() => setActiveTab("specification")}
          >
            <TabIcon className="fas fa-clipboard-list"></TabIcon>
            Specification
          </TabButton>
          <TabButton
            active={activeTab === "productDetails"}
            onClick={() => setActiveTab("productDetails")}
          >
            <TabIcon className="fas fa-box-open"></TabIcon>
            Product Details
          </TabButton>
          <TabButton
            active={activeTab === "artwork"}
            onClick={() => setActiveTab("artwork")}
          >
            <TabIcon className="fas fa-paint-brush"></TabIcon>
            ArtWork Guidelines
          </TabButton>
          <TabButton
            active={activeTab === "orderProcess"}
            onClick={() => setActiveTab("orderProcess")}
          >
            <TabIcon className="fas fa-tasks"></TabIcon>
            Order Process
          </TabButton>
          <TabButton
            active={activeTab === "material"}
            onClick={() => setActiveTab("material")}
          >
            <TabIcon className="fas fa-layer-group"></TabIcon>
            Material
          </TabButton>
          <TabButton
            active={activeTab === "style"}
            onClick={() => setActiveTab("style")}
          >
            <TabIcon className="fas fa-tshirt"></TabIcon>
            Style
          </TabButton>
        </TabNavigation>
        {/* Specification Tab */}
        <TabContent active={activeTab === "specification"}>
          <TabContentTitle>Reliable Production</TabContentTitle>
          <TabContentDescription>
            Our Pack It Perfect team specializes in creating unique and stunning
            packaging designs that will leave your customers in awe. Their need
            could be anything from the material and size to printing and
            finishing touches. Our flexible options can be tailored to match
            your brand's vision and graphic and also provide business
            eco-friendly solutions or premium finishes depending on what you
            need.
          </TabContentDescription>

          <SpecificationTable>
            <tbody>
              <tr>
                <th>Dimensions</th>
                <td>Customization Options</td>
              </tr>
              <tr>
                <th>Printing</th>
                <td>CMYK, PMS, No Printing, Pantone Colour</td>
              </tr>
              <tr>
                <th>Card Stock</th>
                <td>
                  10pt to 28pt (60lb to 400lb) ArtCard, SBS White Bleach Card,
                  Eco-Friendly Kraft, 2mm E-flute, 3mm E-Flute, corrugated Bux
                  Board, cardstock
                </td>
              </tr>
              <tr>
                <th>Quantities</th>
                <td>100 – 100,000</td>
              </tr>
              <tr>
                <th>Coating</th>
                <td>Gloss Lamination, Matte Lamination, Spot UV</td>
              </tr>
              <tr>
                <th>Other Procedure</th>
                <td>Die Cutting, Gluing, Perforation, Digital Printing</td>
              </tr>
              <tr>
                <th>Other Options</th>
                <td>
                  Custom Window Cut Out, Gold/Silver Metallic Foiling,
                  Embossing, Debossing, Raised Ink, PVC Sheet.
                </td>
              </tr>
              <tr>
                <th>Digital Proof</th>
                <td>3D Mock-up, Physical Sampling (On request)</td>
              </tr>
              <tr>
                <th>Turnaround Time</th>
                <td>10, 12 Working Days, Urgent Also available</td>
              </tr>
            </tbody>
          </SpecificationTable>
        </TabContent>
        {/* Product Details Tab */}
        <TabContent active={activeTab === "productDetails"}>
          <TabContentTitle>Product Specifications</TabContentTitle>
          <TabContentDescription>
            Our {filterProducts.title} are designed to provide maximum
            protection while enhancing your product's appeal. We use
            high-quality materials that ensure durability and aesthetic appeal.
          </TabContentDescription>

          <BrandsContainer>
            <BrandsSection>
              <BrandsInfo>
                <h2>Worldwide Satisfied Brands</h2>
                <p>
                  Our customers always believe that we provide them with the
                  best service. Whether it's regarding Prices or quality, we
                  never compromise on it. Because our vision is to make you our
                  long-term customer, we want to become a one-stop partner where
                  we can provide all printing services in one place without any
                  worries about production.
                </p>
                <strong>More Than +5000 Satisfied Clients Worldwide</strong>
                <BrandsLogos>
                  <img src="/images/brands/bodyshop.png" alt="The Body Shop" />
                  <img src="/images/brands/nyx.png" alt="NYX" />
                  <img
                    src="/images/brands/charlotte-tilbury.png"
                    alt="Charlotte Tilbury"
                  />
                  <img src="/images/brands/dr-oetker.png" alt="Dr. Oetker" />
                  <img src="/images/brands/packnsend.png" alt="Pack & Send" />
                  <img src="/images/brands/harrods.png" alt="Harrods" />
                </BrandsLogos>

                <h3>Create Custom Boxes Quick and Easy!</h3>
                <BenefitsList>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>Minimum 100 Boxes</span>
                  </BenefitItem>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>Fast Turnaround Times</span>
                  </BenefitItem>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>Free Die and Plates</span>
                  </BenefitItem>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>High Quality Offset Printing</span>
                  </BenefitItem>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>Competitive Pricing</span>
                  </BenefitItem>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>Free Design Support</span>
                  </BenefitItem>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>Customized Sizes & Styles</span>
                  </BenefitItem>
                  <BenefitItem>
                    <i className="fas fa-check-circle"></i>
                    <span>Free Shipping</span>
                  </BenefitItem>
                </BenefitsList>
              </BrandsInfo>
              <BrandsShowcase>
                <img
                  src="/images/products/product-showcase.png"
                  alt="Custom packaging examples"
                />
              </BrandsShowcase>
            </BrandsSection>
          </BrandsContainer>
        </TabContent>
        {/* Artwork Guidelines Tab */}
        <TabContent active={activeTab === "artwork"}>
          <ArtworkGuideContainer>
            <ArtworkGuideTitle>Artwork Preparation Guide</ArtworkGuideTitle>
            <ArtworkGuideDescription>
              Use our artwork guidelines and the directions below to prepare
              your artwork files for publication. Need a hand preparing your
              artwork? We can help. We offer 100% free design support and
              mockups to ensure the style of the final product perfectly matches
              your vision. Simply contact our packaging wizards—we're just a
              call or click away!
            </ArtworkGuideDescription>

            <ArtworkTemplateImage>
              <img
                src="/images/artwork/dieline-template.png"
                alt="Dieline Template"
              />
            </ArtworkTemplateImage>

            <GuidelinesGrid>
              <GuidelineItem>
                <GuidelineIcon>
                  <img src="/images/artwork/cut-line.png" alt="Cut Line" />
                </GuidelineIcon>
                <GuidelineTitle>Cut Line (Black Lines)</GuidelineTitle>
                <GuidelineText>
                  The cut line (black lines) indicates the cut's ultimate size.
                  Important artwork and text should be positioned at least 0.125
                  inches within the cut line.
                </GuidelineText>
              </GuidelineItem>

              <GuidelineItem>
                <GuidelineIcon>
                  <img src="/images/artwork/bleed-line.png" alt="Bleed Line" />
                </GuidelineIcon>
                <GuidelineTitle>Bleed Line (Green Lines)</GuidelineTitle>
                <GuidelineText>
                  Green lines indicate where the bleed line is located. To
                  provide a smooth print, any artwork that crosses the cut line
                  should be extended to the bleed line.
                </GuidelineText>
              </GuidelineItem>

              <GuidelineItem>
                <GuidelineIcon>
                  <img
                    src="/images/artwork/crease-line.png"
                    alt="Crease Line"
                  />
                </GuidelineIcon>
                <GuidelineTitle>Crease Line (Red Lines)</GuidelineTitle>
                <GuidelineText>
                  The crease line (red lines) indicates where the product should
                  be folded.
                </GuidelineText>
              </GuidelineItem>

              <GuidelineItem>
                <GuidelineIcon>
                  <img
                    src="/images/artwork/perforation.png"
                    alt="Perforation"
                  />
                </GuidelineIcon>
                <GuidelineTitle>
                  Perforation (Dotted Black Lines)
                </GuidelineTitle>
                <GuidelineText>
                  Perforation (dotted black lines) refers to paper punctured
                  with tiny holes for easy tear and fold.
                </GuidelineText>
              </GuidelineItem>

              <GuidelineItem>
                <GuidelineIcon>
                  <img
                    src="/images/artwork/safety-margin.png"
                    alt="Safety Margin"
                  />
                </GuidelineIcon>
                <GuidelineTitle>
                  Safety Margin (Dotted Green Lines)
                </GuidelineTitle>
                <GuidelineText>
                  The safety margin (dotted green lines) indicates where artwork
                  and text can be securely put within. Unless your design is
                  purposeful, all artwork should be at least 0.125 inches.
                </GuidelineText>
              </GuidelineItem>
            </GuidelinesGrid>
          </ArtworkGuideContainer>
        </TabContent>
        {/* Order Process Tab */}
        <TabContent active={activeTab === "orderProcess"}>
          <TabContentTitle>Order Process</TabContentTitle>
          <TabContentDescription>
            Our streamlined order process makes it easy to get your custom{" "}
            {filterProducts.title} quickly and efficiently.
          </TabContentDescription>

          <ProcessGrid>
            <ProcessItem>
              <ProcessNumber>01</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Choose your custom packaging</ProcessTitle>
                <ProcessText>
                  We have a collection of retail packaging boxes, which have
                  been put together with much detail, so you can pick the most
                  suitable one for your venture. As you browse for custom boxes,
                  our proactive staff will be ready to support any of your
                  concerns. All you have to do is use the Live Chat Support tool
                  that is on the bottom right side of your screen, which will
                  let you see and communicate on the chat box while doing other
                  activities at hand.
                </ProcessText>
              </ProcessContent>
            </ProcessItem>

            <ProcessItem>
              <ProcessNumber>02</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Request a Free Quote</ProcessTitle>
                <ProcessText>
                  It is easy, fast, and most importantly free to ask for a quote
                  from us. Simply fill out the form within this page, located in
                  the top right corner, and type your requirements. Do note to
                  give important pieces of information like the preferred size
                  of the box, quantity needed, design ideas, personal wishes, as
                  well as deadlines for the project.
                </ProcessText>
              </ProcessContent>
            </ProcessItem>

            <ProcessItem>
              <ProcessNumber>03</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Don't Forget to Place Your Order</ProcessTitle>
                <ProcessText>
                  Our quotation specialists will get to work as soon as you
                  place your order. We aim to respond to your inquiries within
                  1-2 hours, and we can promise packaging work will commence
                  almost instantaneously. If you need assistance in design
                  during your estimation request, feel free to provide us with
                  your contact details so that our dedicated design consultant
                  can reach out and assist further.
                </ProcessText>
              </ProcessContent>
            </ProcessItem>

            <ProcessItem>
              <ProcessNumber>04</ProcessNumber>
              <ProcessContent>
                <ProcessTitle>Invoice and DieLine Design</ProcessTitle>
                <ProcessText>
                  A packaging dieline is a blueprint for your box design, making
                  sure the art for your packaging is produced after the details
                  have been finalized. It's a flat drawing and as the name
                  suggests, it contains outlines of marks that indicate where
                  the package will be cut and folded. We will send you the
                  artwork for review within one or two business days after
                  receiving your payment. Our dieline will be created based on
                  the information filed in the dieline order form.
                </ProcessText>
              </ProcessContent>
            </ProcessItem>
          </ProcessGrid>
        </TabContent>
        {/* Material Tab */}
        <TabContent active={activeTab === "material"}>
          <TabContentTitle>Material Options</TabContentTitle>
          <TabContentDescription>
            We offer a variety of high-quality materials for your{" "}
            {filterProducts.title}, ensuring durability and visual appeal.
          </TabContentDescription>

          <SpecificationTable>
            <tbody>
              <tr>
                <th>Cardboard/Paperboard</th>
                <td>
                  <ul>
                    <li>SBS (Solid Bleached Sulfate): 10pt to 24pt</li>
                    <li>Kraft: 10pt to 24pt</li>
                    <li>Recycled: 10pt to 24pt</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Corrugated</th>
                <td>
                  <ul>
                    <li>E-flute (1.5mm)</li>
                    <li>B-flute (3mm)</li>
                    <li>F-flute (0.8mm)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Eco-Friendly Options</th>
                <td>
                  <ul>
                    <li>Kraft Paper (Recycled, Unbleached)</li>
                    <li>Recycled Paperboard</li>
                    <li>Biodegradable Coatings</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <th>Premium Options</th>
                <td>
                  <ul>
                    <li>Rigid Board (1mm to 3mm thickness)</li>
                    <li>Specialty Papers (Textured, Handmade)</li>
                    <li>Metallic Finishes</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </SpecificationTable>

          <p>
            All our materials are sourced from sustainable suppliers, and we
            offer eco-friendly options for environmentally conscious brands.
          </p>
        </TabContent>
        {/* Style Tab */}
        <TabContent active={activeTab === "style"}>
          <TabContentTitle>Box Styles</TabContentTitle>
          <TabContentDescription>
            Choose from our wide range of box styles to find the perfect
            packaging solution for your products.
          </TabContentDescription>

          <BoxStyleGrid>
            {styleProducts.map((styleProduct, index) => (
              <BoxStyleItem key={index}>
                <img
                  src={styleProduct.image}
                  alt={`Box Style ${styleProduct.code}`}
                />
                <BoxStyleCode>{styleProduct.code}</BoxStyleCode>
              </BoxStyleItem>
            ))}
          </BoxStyleGrid>
        </TabContent>
      </TabsContainer>

      {/* Brands Section */}
      <BrandsContainer>
        <SectionTitle>Worldwide Satisfied Brands</SectionTitle>
        <BrandsText>
          Our customers always believe that our priority has not only been to
          supply packaging but to elevate brands by giving them a platform. We
          have assisted many businesses in boosting their revenues. Our custom
          packaging boxes are used by leading brands across the UK, Europe, and
          North America to package their products. Here is what some of our
          satisfied customers are saying about Pack It Perfect.
        </BrandsText>
        <BrandsLogos>
          <BrandLogo src="/images/brands/brand1.png" alt="Brand 1" />
          <BrandLogo src="/images/brands/brand2.png" alt="Brand 2" />
          <BrandLogo src="/images/brands/brand3.png" alt="Brand 3" />
          <BrandLogo src="/images/brands/brand4.png" alt="Brand 4" />
          <BrandLogo src="/images/brands/brand5.png" alt="Brand 5" />
        </BrandsLogos>
      </BrandsContainer>

      {/* Custom Boxes Features */}
      <SectionTitle>Create Custom Boxes Quick and Easy!</SectionTitle>
      <FeatureBoxGrid>
        <FeatureBox>
          <FeatureIcon iconBg="#f0e1c9">
            <i className="fas fa-box-open"></i>
          </FeatureIcon>
          <FeatureTitle>Bespoke Box Sizes</FeatureTitle>
          <FeatureDescription>
            Custom sizes tailored to your product dimensions
          </FeatureDescription>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon iconBg="#d9edf7">
            <i className="fas fa-paint-brush"></i>
          </FeatureIcon>
          <FeatureTitle>Free Design Support</FeatureTitle>
          <FeatureDescription>
            Our designers help create your perfect packaging
          </FeatureDescription>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon iconBg="#e1f7d9">
            <i className="fas fa-leaf"></i>
          </FeatureIcon>
          <FeatureTitle>Eco-Friendly Materials</FeatureTitle>
          <FeatureDescription>
            Sustainable options for environmentally conscious brands
          </FeatureDescription>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon iconBg="#f7d9e1">
            <i className="fas fa-truck"></i>
          </FeatureIcon>
          <FeatureTitle>Fast Turnaround</FeatureTitle>
          <FeatureDescription>
            Quick production and delivery timeframes
          </FeatureDescription>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon iconBg="#f0e1c9">
            <i className="fas fa-tags"></i>
          </FeatureIcon>
          <FeatureTitle>Competitive Pricing</FeatureTitle>
          <FeatureDescription>
            Quality packaging at affordable prices
          </FeatureDescription>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon iconBg="#d9edf7">
            <i className="fas fa-medal"></i>
          </FeatureIcon>
          <FeatureTitle>Premium Quality</FeatureTitle>
          <FeatureDescription>
            High-quality materials and exquisite finishing
          </FeatureDescription>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon iconBg="#e1f7d9">
            <i className="fas fa-fingerprint"></i>
          </FeatureIcon>
          <FeatureTitle>Unique Designs</FeatureTitle>
          <FeatureDescription>
            Stand out with creative, exclusive packaging
          </FeatureDescription>
        </FeatureBox>
        <FeatureBox>
          <FeatureIcon iconBg="#f7d9e1">
            <i className="fas fa-headset"></i>
          </FeatureIcon>
          <FeatureTitle>Dedicated Support</FeatureTitle>
          <FeatureDescription>
            Personal assistance throughout the process
          </FeatureDescription>
        </FeatureBox>
      </FeatureBoxGrid>

      {/* Reviews Section */}Ready to think outside the box?
      <ReviewsContainer>
        <SectionTitle>Reviews From Happy Customers!</SectionTitle>
        <ReviewsGrid>
          <ReviewCard>
            <ReviewIcon>
              <i className="fas fa-smile-beam"></i>
            </ReviewIcon>
            <ReviewText>
              "Incredible quality and attention to detail! The{" "}
              {filterProducts.title} exceeded our expectations and perfectly
              showcased our brand identity. Highly recommended!"
            </ReviewText>
            <StarRating>★★★★★</StarRating>
            <ReviewerInfo>Sarah J. - Beauty Brand Owner</ReviewerInfo>
          </ReviewCard>
          <ReviewCard>
            <ReviewIcon>
              <i className="fas fa-thumbs-up"></i>
            </ReviewIcon>
            <ReviewText>
              "The team was extremely responsive and helpful throughout the
              design process. Our packaging looks professional and has
              significantly increased our product's shelf appeal."
            </ReviewText>
            <StarRating>★★★★★</StarRating>
            <ReviewerInfo>Michael T. - Skincare Company</ReviewerInfo>
          </ReviewCard>
          <ReviewCard>
            <ReviewIcon>
              <i className="fas fa-heart"></i>
            </ReviewIcon>
            <ReviewText>
              "I needed eco-friendly packaging for my organic product line, and
              Pack It Perfect delivered exactly what I was looking for. Great
              quality and sustainable too!"
            </ReviewText>
            <StarRating>★★★★★</StarRating>
            <ReviewerInfo>Emma L. - Organic Products</ReviewerInfo>
          </ReviewCard>
          <ReviewCard>
            <ReviewIcon>
              <i className="fas fa-star"></i>
            </ReviewIcon>
            <ReviewText>
              "Fast turnaround and excellent customer service. The boxes arrived
              on time and looked fantastic. Will definitely be ordering again
              for our next product launch."
            </ReviewText>
            <StarRating>★★★★★</StarRating>
            <ReviewerInfo>James R. - E-commerce Business</ReviewerInfo>
          </ReviewCard>
        </ReviewsGrid>
      </ReviewsContainer>

      {/* Finish Options Section */}
      <FinishOptionsContainer>
        <SectionTitle>Premium Finishing Options</SectionTitle>
        <FinishOptionsGrid>
          <FinishOptionCard>
            <FinishOptionIcon>
              <i className="fas fa-shield-alt"></i>
            </FinishOptionIcon>
            <FinishOptionInfo>
              <FinishOptionTitle>Anti-scratch Lamination</FinishOptionTitle>
              <FinishOptionDescription>
                Provides superior protection against scratches and scuffs,
                maintaining your packaging's pristine appearance.
              </FinishOptionDescription>
            </FinishOptionInfo>
          </FinishOptionCard>
          <FinishOptionCard>
            <FinishOptionIcon>
              <i className="fas fa-tint"></i>
            </FinishOptionIcon>
            <FinishOptionInfo>
              <FinishOptionTitle>Aqueous Coating</FinishOptionTitle>
              <FinishOptionDescription>
                Water-based coating that provides a clear, protective finish
                with enhanced vibrancy and sheen.
              </FinishOptionDescription>
            </FinishOptionInfo>
          </FinishOptionCard>
          <FinishOptionCard>
            <FinishOptionIcon>
              <i className="fas fa-mitten"></i>
            </FinishOptionIcon>
            <FinishOptionInfo>
              <FinishOptionTitle>Velvet Lamination</FinishOptionTitle>
              <FinishOptionDescription>
                Luxurious soft-touch finish that adds a premium feel and subtle
                elegance to your packaging.
              </FinishOptionDescription>
            </FinishOptionInfo>
          </FinishOptionCard>
          <FinishOptionCard>
            <FinishOptionIcon>
              <i className="fas fa-brush"></i>
            </FinishOptionIcon>
            <FinishOptionInfo>
              <FinishOptionTitle>Matte Lamination</FinishOptionTitle>
              <FinishOptionDescription>
                Refined, non-reflective finish that provides a sophisticated
                look and fingerprint resistance.
              </FinishOptionDescription>
            </FinishOptionInfo>
          </FinishOptionCard>
        </FinishOptionsGrid>
      </FinishOptionsContainer>

      {/* Discount Section */}
      <DiscountSection>
        <DiscountTitle>Get 25% Off Your First Order!</DiscountTitle>
        <DiscountForm>
          <DiscountInput type="text" placeholder="Name" />
          <DiscountInput type="email" placeholder="Email" />
          <DiscountInput type="tel" placeholder="Phone" />
          <DiscountButton href="/get-a-qoute">GET A QUOTE</DiscountButton>
        </DiscountForm>
      </DiscountSection>

      {/* Related Products */}
      <RelatedProductsContainer>
        <SectionTitle>Related Products</SectionTitle>
        <RelatedProductsGrid>
          {filteredCategories.subProducts
            .filter((p) => p.title !== filterProducts.title)
            .slice(0, 4)
            .map((relatedProduct, index) => (
              <RelatedProductCard
                key={index}
                onClick={() => handleRelatedProductClick(relatedProduct.title)}
              >
                <RelatedProductImage
                  src={relatedProduct.image}
                  alt={relatedProduct.title}
                />
                <RelatedProductTitle>
                  {relatedProduct.title}
                </RelatedProductTitle>
              </RelatedProductCard>
            ))}
        </RelatedProductsGrid>
      </RelatedProductsContainer>
    </PageContainer>
  );
};

export default ProductDetails;
