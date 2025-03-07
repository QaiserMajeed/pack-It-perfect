import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SEO from "./components/SEO"; // Import SEO component
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
// Import only essential components
import MainContent from "./components/mainContent";
import ProductCard from "./components/Productcard";
import Products from "./components/Products";
import { FloatingWhatsApp } from "react-floating-whatsapp";

// Lazy load non-critical components
const ProductDetails = lazy(() => import("./components/ProductDetails"));
const TopProductDetails = lazy(() => import("./components/TopProductDetails"));
const HeroSection = lazy(() =>
  import("./components/HomePageComponents/HeroSection")
);
const FeatureHighlights = lazy(() =>
  import("./components/HomePageComponents/FeatureHighlights")
);
const IndustryCategoriesSection = lazy(() =>
  import("./components/HomePageComponents/IndustryCategoriesSection")
);
const BestSellingProducts = lazy(() =>
  import("./components/HomePageComponents/BestSellingProducts")
);
const TestimonialsSection = lazy(() =>
  import("./components/HomePageComponents/TestimonialsSection")
);
const CompanyBenefitsSection = lazy(() =>
  import("./components/HomePageComponents/CompanyBenefitsSection")
);
const QouteForm = lazy(() => import("./components/QuoteForm"));

// Loading fallback
const LoadingFallback = () => (
  <div
    className="loading-container"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "300px",
    }}
  >
    <div
      className="spinner"
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderTop: "5px solid rgb(0, 0, 90)",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

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

  // Simplified material and style slides arrays (keep the same as your original code)

  const HomePage = () => {
    return (
      <>
        <SEO
          title="Custom Packaging Solutions | UK's Premier Packaging Provider"
          description="Pack it Perfect offers premium custom packaging solutions with eco-friendly materials, free design assistance, and fast UK delivery. Get a quote today!"
          keywords="custom packaging, packaging boxes UK, eco-friendly packaging, custom boxes"
          canonicalUrl="/"
        />
        <Suspense fallback={<LoadingFallback />}>
          <HeroSection />
          <FeatureHighlights />
          <IndustryCategoriesSection />
          <BestSellingProducts />
          <CompanyBenefitsSection />
          <TestimonialsSection />
          <FloatingWhatsApp
            phoneNumber="+44 07440189478"
            accountName="Nancy "
            allowEsc
            allowClickAway
            notification
            notificationSound
          />
        </Suspense>
      </>
    );
  };

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
                element={
                  <>
                    <Suspense fallback={<LoadingFallback />}>
                      <RouteWrapper
                        component={ProductCard}
                        componentProps={{ categories: Products }}
                      />
                    </Suspense>
                  </>
                }
              />
              <Route
                path="/category/:categoryName/product/:product"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <RouteWrapper component={ProductDetails} />
                  </Suspense>
                }
              />
              <Route
                path="/product/:product"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <RouteWrapper component={TopProductDetails} />
                  </Suspense>
                }
              />
              <Route
                path="/get-a-quote"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SEO
                      title="Get a Free Quote | Custom Packaging Solutions"
                      description="Request a free quote for your custom packaging needs. Fast turnaround times, no die and plate charges, and eco-friendly options available."
                      canonicalUrl="/get-a-quote"
                    />
                    <QouteForm />
                  </Suspense>
                }
              />
            </Routes>
          </section>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// RouteWrapper component to handle SEO for dynamic routes
const RouteWrapper = ({ component: Component, componentProps = {} }) => {
  // This is a simplified version - in a real implementation, you would extract
  // the actual metadata from the route parameters and component data

  const getMetaForRoute = () => {
    const path = window.location.pathname;

    // Example SEO setup for category pages
    if (path.includes("/category/")) {
      const categoryName = path.split("/category/")[1].split("/")[0];
      const readableCategoryName = categoryName.replace(/-/g, " ");

      return {
        title: `${readableCategoryName} Packaging Solutions`,
        description: `Explore our custom ${readableCategoryName.toLowerCase()} packaging options. Eco-friendly materials, premium quality, and fast UK delivery.`,
        canonicalUrl: path,
      };
    }

    // Example SEO setup for product pages
    if (path.includes("/product/")) {
      const productName = path.split("/product/")[1];
      const readableProductName = productName.replace(/-/g, " ");

      // Example product structured data
      const schema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: readableProductName,
        description: `Premium quality custom ${readableProductName.toLowerCase()} packaging solutions for your business.`,
        brand: {
          "@type": "Brand",
          name: "Pack it Perfect",
        },
        offers: {
          "@type": "Offer",
          url: `https://packageitperfect.com/${path}`,
          priceCurrency: "GBP",
          availability: "https://schema.org/InStock",
        },
      };

      return {
        title: `${readableProductName} | Custom Packaging Solutions`,
        description: `Premium quality custom ${readableProductName.toLowerCase()} packaging. Eco-friendly options, free design assistance, and fast delivery.`,
        canonicalUrl: path,
        schema: schema,
      };
    }

    return {};
  };

  const meta = getMetaForRoute();

  return (
    <>
      <SEO {...meta} />
      <Component {...componentProps} />
    </>
  );
};

export default App;
