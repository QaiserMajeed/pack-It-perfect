import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SectionContainer = styled.div`
  padding: 4rem 0;
  background-color: #f8f8f8;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SellingText = styled.span`
  color: #ff3b30;
  margin-left: 0.5rem;
`;

const ViewAllButton = styled.a`
  color: #333;
  font-size: 0.9rem;
  text-decoration: none;
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
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled(Link)`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: transform 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NewTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff3b30;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 3px;
  z-index: 1;
`;

const ProductImage = styled.div`
  padding: 1rem;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.div`
  font-size: 0.95rem;
  color: #ff3b30;
  font-weight: 600;
`;

const RegularPrice = styled.span`
  text-decoration: line-through;
  color: #999;
  font-size: 0.85rem;
  margin-left: 0.5rem;
`;

const BestSellingProducts = () => {
  const products = [
    {
      id: 1,
      title: "Cigarette Packaging",
      image: "/images/products/cigarette-packaging.jpg",
      price: "$399",
      regularPrice: "$499",
      link: "/product/cigarette-packaging",
      isNew: true,
    },
    {
      id: 2,
      title: "Bakery Product Boxes",
      image: "/images/products/bakery-boxes.jpg",
      price: "$125",
      regularPrice: "$149",
      link: "/product/bakery-product-boxes",
      isNew: true,
    },
    {
      id: 3,
      title: "Custom Burger Boxes",
      image: "/images/products/burger-boxes.jpg",
      price: "$189",
      regularPrice: "$250",
      link: "/product/custom-burger-boxes",
      isNew: false,
    },
    {
      id: 4,
      title: "Custom Cardboard Boxes",
      image: "/images/products/cardboard-boxes.jpg",
      price: "$179",
      regularPrice: "$220",
      link: "/product/custom-cardboard-boxes",
      isNew: false,
    },
    {
      id: 5,
      title: "Leather Shoes Boxes",
      image: "/images/products/shoes-boxes.jpg",
      price: "$249",
      regularPrice: "$299",
      link: "/product/leather-shoes-boxes",
      isNew: true,
    },
    {
      id: 6,
      title: "Cereal Boxes",
      image: "/images/products/cereal-boxes.jpg",
      price: "$150",
      regularPrice: "$180",
      link: "/product/cereal-boxes",
      isNew: true,
    },
    {
      id: 7,
      title: "Recyclable Packaging",
      image: "/images/products/recyclable-packaging.jpg",
      price: "$125",
      regularPrice: "$150",
      link: "/product/recyclable-packaging",
      isNew: false,
    },
    {
      id: 8,
      title: "Custom Retail Boxes",
      image: "/images/products/retail-boxes.jpg",
      price: "$135",
      regularPrice: "$159",
      link: "/product/custom-retail-boxes",
      isNew: true,
    },
    {
      id: 9,
      title: "Chocolate Boxes Packaging",
      image: "/images/products/chocolate-boxes.jpg",
      price: "$110",
      regularPrice: "$130",
      link: "/product/chocolate-boxes",
      isNew: true,
    },
    {
      id: 10,
      title: "Perfume Packaging",
      image: "/images/products/perfume-packaging.jpg",
      price: "$88",
      regularPrice: "$109",
      link: "/product/perfume-packaging",
      isNew: false,
    },
    {
      id: 11,
      title: "Wine Bottle Packaging",
      image: "/images/products/wine-bottle-packaging.jpg",
      price: "$129",
      regularPrice: "$149",
      link: "/product/wine-bottle-packaging",
      isNew: true,
    },
    {
      id: 12,
      title: "Auto Lock Display Lid Boxes",
      image: "/images/products/auto-lock-boxes.jpg",
      price: "$145",
      regularPrice: "$180",
      link: "/product/auto-lock-display-lid-boxes",
      isNew: false,
    },
  ];

  return (
    <SectionContainer>
      <div className="container">
        <SectionHeader>
          <SectionTitle>
            BEST <SellingText>SELLING!</SellingText>
          </SectionTitle>
          <ViewAllButton href="/products">View all products</ViewAllButton>
        </SectionHeader>

        <ProductsGrid>
          {products.slice(0, 8).map((product) => (
            <ProductCard to={product.link} key={product.id}>
              {product.isNew && <NewTag>NEW</NewTag>}
              <ProductImage>
                <img src={product.image} alt={product.title} />
              </ProductImage>
              <ProductInfo>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductPrice>
                  {product.price}
                  <RegularPrice>{product.regularPrice}</RegularPrice>
                </ProductPrice>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductsGrid>
      </div>
    </SectionContainer>
  );
};

export default BestSellingProducts;
