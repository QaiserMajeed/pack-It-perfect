import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
  padding: 4rem 0;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CategoryCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const IconBackground = styled.div`
  width: 120px;
  height: 60px;
  position: relative;
  background-color: ${(props) => props.bgColor || "#FFD699"};
  border-radius: 120px 120px 0 0;
  margin-bottom: 0.5rem;
`;

const CategoryIcon = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
`;

const CategoryName = styled.span`
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
`;

const Superscript = styled.sup`
  font-size: 0.6rem;
  top: -0.5em;
`;

const ViewAllLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;

  a {
    color: #333;
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;

    &:hover {
      color: rgb(0, 0, 90);
      text-decoration: underline;
    }

    &::after {
      content: "→";
      margin-left: 0.5rem;
    }
  }
`;

const IndustryCategoriesSection = () => {
  const categories = [
    {
      name: "Cosmetics",
      icon: "/images/categories/cosmetics.png",
      bgColor: "#FFD699",
      link: "/category/Beauty and Cosmetics Packaging",
    },
    {
      name: "Food",
      icon: "/images/categories/food.png",
      bgColor: "#ADE4FF",
      link: "/category/Fast Food Packaging",
    },
    {
      name: "Supplements",
      icon: "/images/categories/supplements.png",
      bgColor: "#FFB380",
      link: "/category/Supplements Packaging",
    },
    {
      name: "Gifts",
      icon: "/images/categories/gifts.png",
      bgColor: "#FF99A6",
      link: "/category/Gifts and Souvenirs Boxes",
    },
    {
      name: "Beverages",
      icon: "/images/categories/beverages.png",
      bgColor: "#FFEDB3",
      link: "/category/Beverage Custom Boxes",
    },
    {
      name: "Cannabis",
      icon: "/images/categories/cannabis.png",
      bgColor: "#B3E6CC",
      link: "/category/Cannabis Custom Packaging",
    },
    {
      name: "Clothing",
      icon: "/images/categories/clothing.png",
      bgColor: "#CCE0FF",
      link: "/category/Clothing and Apparel Boxes",
    },
    {
      name: "E-commerce",
      icon: "/images/categories/ecommerce.png",
      bgColor: "#DDBDF1",
      link: "/category/E-Commerce Packaging",
    },
    {
      name: "Electronics",
      icon: "/images/categories/electronics.png",
      bgColor: "#99E6E6",
      link: "/category/Electronics Boxes",
    },
    {
      name: "Shoes",
      icon: "/images/categories/shoes.png",
      bgColor: "#A6D388",
      link: "/category/Shoes Packaging",
    },
    {
      name: "Healthcare",
      icon: "/images/categories/healthcare.png",
      bgColor: "#FFB3F0",
      link: "/category/Healthcare Boxes",
    },
    {
      name: "Jewelry",
      icon: "/images/categories/jewelry.png",
      bgColor: "#E6CCFF",
      link: "/category/Jewelry Packaging",
    },
    {
      name: "Custom Made",
      icon: "/images/categories/custom.png",
      bgColor: "#B3B3CC",
      link: "/category/Custom Made Boxes",
    },
    {
      name: "Medical",
      icon: "/images/categories/medical.png",
      bgColor: "#99CCFF",
      link: "/category/Medical Devices Boxes",
    },
  ];

  return (
    <SectionContainer>
      <div className="container">
        <SectionTitle>
          Popular Packaging Solutions in Your Industry!
        </SectionTitle>
        <SectionDescription>
          Our service support at any point of your packaging journey to
          guarantee best packaging success.
        </SectionDescription>

        <CategoriesGrid>
          {categories.slice(0, 10).map((category, index) => (
            <CategoryCard to={category.link} key={index}>
              <IconBackground bgColor={category.bgColor}>
                <CategoryIcon>
                  <img src={category.icon} alt={category.name} />
                </CategoryIcon>
              </IconBackground>
              <CategoryName>
                {category.name}
                <Superscript>TM</Superscript>
              </CategoryName>
            </CategoryCard>
          ))}
        </CategoriesGrid>

        <CategoriesGrid>
          {categories.slice(10).map((category, index) => (
            <CategoryCard to={category.link} key={index}>
              <IconBackground bgColor={category.bgColor}>
                <CategoryIcon>
                  <img src={category.icon} alt={category.name} />
                </CategoryIcon>
              </IconBackground>
              <CategoryName>
                {category.name}
                <Superscript>TM</Superscript>
              </CategoryName>
            </CategoryCard>
          ))}
        </CategoriesGrid>

        <ViewAllLink>
          <a href="/all-categories">View all products</a>
        </ViewAllLink>
      </div>
    </SectionContainer>
  );
};

export default IndustryCategoriesSection;
