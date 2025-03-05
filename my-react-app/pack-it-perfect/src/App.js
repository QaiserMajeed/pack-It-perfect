import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import MainContent from "./components/mainContent";
import TopProducts from "./components/TopProduct";
import Products from "./components/Products";
import ProductCard from "./components/Productcard";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import TopProductDetails from "./components/TopProductDetails";
import CarouselComponent from "./components/carasoulContainer";
import StyleCarouselComponent from "./components/StyleCarasoulComponent";
import ImageGridComponent from "./components/ImageOverlay";
import TextContainer from "./components/Textcontainer";
import CustomBoxesForm from "./components/CustomBoxform";
import MainContent2 from "./components/maincontent2";
import HeroSection from "./components/HomePageComponents//HeroSection";
import FeatureHighlights from "./components/HomePageComponents//FeatureHighlights";
import IndustryCategoriesSection from "./components/HomePageComponents//IndustryCategoriesSection";
import BestSellingProducts from "./components/HomePageComponents//BestSellingProducts";
import TestimonialsSection from "./components/HomePageComponents//TestimonialsSection";
import CompanyBenefitsSection from "./components/HomePageComponents//CompanyBenefitsSection";


function App() {
  // Load Bootstrap JS
  useEffect(() => {
    // Import Bootstrap JS
    const loadBootstrapJS = async () => {
      try {
        // Check if window and document exist (for SSR)
        if (typeof window !== "undefined" && typeof document !== "undefined") {
          // Import Bootstrap bundle with Popper
          await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        }
      } catch (error) {
        console.error("Failed to load Bootstrap JS:", error);
      }
    };

    loadBootstrapJS();
  }, []);

  const materialSlides = [
    {
      title: "White Uncoated Recyclable Eco Friendly Card",
      imgSrc: "images/ChooseMaterial/1.webp",
    },
    {
      title: "Brilliant White Uncoated Recyclable Eco Friendly Card",
      imgSrc: "images/ChooseMaterial/2.webp",
    },
    // ...other material slides
  ];

  const styleSlides = [
    {
      title: "Agenda Boxes",
      imgSrc: "images/ChooseYourStyle/Agenda Boxes.webp",
    },
    {
      title: "Archive Boxes",
      imgSrc: "images/ChooseYourStyle/ArchiveBoxes.webp",
    },
    // ...other style slides
  ];

  const topproducts = [
    { title: "Pizza Boxes", image: "images/FastFood/Pizza.webp" },
    { title: "Cream Boxes", image: "images/CosmeticImages/4.webp" },
    // ...other top products
  ];

  const TextContainers = {
    title: "Choosing us, why?",
    description:
      "Superior services aim to help you achieve your company's Goals successfully and economically.",
    services: [
      {
        icon: "fas fa-cog",
        title: "Personalized Dimensions and design:",
        description:
          "We pride ourselves on offering our customers complete artistic freedom when it comes to the design of their packing boxes.",
      },
      // ...other services
    ],
  };

const HomePage = () => {
  return (
    <>
      {/* <MainContent /> */}
      <HeroSection />
      <FeatureHighlights />
      <IndustryCategoriesSection />
      <BestSellingProducts />
      <CompanyBenefitsSection />
      <TestimonialsSection />
    </>
  );
};

  const HomePage = () => (
    <>
      <MainContent />
      <TopProducts products={topproducts} />
      <CarouselComponent />
      <StyleCarouselComponent slides={styleSlides} />
      <StyleCarouselComponent slides={materialSlides} />
      <ImageGridComponent />
      <TextContainer list={TextContainers} />
      <CustomBoxesForm />
      <MainContent2 />
    </>
  );

  return (
    <Router>
      <div className="pack-it-perfect-app">
        <Header />
        <main>
          <section className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/category/:categoryName"
                element={<ProductCard categories={Products} />}
              />
              <Route
                path="/category/:categoryName/product/:product"
                element={<ProductDetails />}
              />
              <Route path="/product/:product" element={<TopProductDetails />} />
            </Routes>
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
