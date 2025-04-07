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
import FAQPage from "./components/FAQPage";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";
import ContactPage from "./components/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import StickyCTAProvider from "./components/StickyCTAProvider";
import PaymentPlansPage from "./components/PaymentsPlans";
import JarsCupsPage from "./components/JarsCupsPage";

// Import the Google Tag Manager component
import GoogleTagManager from "./components/GoogleTagManager";

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

const CaseStudy = lazy(() => import("./components/CaseStudy"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));

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
        borderTop: "5px solid #000",
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
         
        </Suspense>
      </>
    );
  };

  return (
    <Router>
      {/* Add Google Tag Manager */}
      <GoogleTagManager />
      <ScrollToTop /> {/* Add this line */}
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
                path="/payment-plans"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SEO
                      title="Flexible Payment Plans | Pay in Installments"
                      description="Discover our flexible payment plans that allow you to pay for your custom packaging in installments. Easy monthly payments with no hidden fees."
                      canonicalUrl="/payment-plans"
                    />
                    <PaymentPlansPage />
                  </Suspense>
                }
              />
              <Route
                path="/jars-cups"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SEO
                      title="Custom Jars and Cups | Food and Beverage Packaging"
                      description="Shop our range of customizable jars and cups for food, beverages, and cosmetics. Sustainable options available with premium custom printing."
                      canonicalUrl="/jars-cups"
                    />
                    <JarsCupsPage />
                  </Suspense>
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
              <Route
                path="/faq"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SEO
                      title="Frequently Asked Questions | Pack it Perfect"
                      description="Find answers to common questions about our custom packaging services, design process, materials, shipping and more."
                      canonicalUrl="/faq"
                    />
                    <FAQPage />
                  </Suspense>
                }
              />

              <Route
                path="/blog"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <BlogList />
                  </Suspense>
                }
              />

              <Route
                path="/blog/:slug"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <BlogDetail />
                  </Suspense>
                }
              />
              <Route
                path="/case-studies"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <SEO
                      title="Case Studies | Our Custom Packaging Success Stories"
                      description="Explore our custom packaging case studies to see how we've helped brands elevate their packaging with bespoke, sustainable solutions."
                      canonicalUrl="/case-studies"
                    />
                    <CaseStudies />
                  </Suspense>
                }
              />

              <Route
                path="/case-study/:slug"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <CaseStudy />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<LoadingFallback />}>
                    <ContactPage />
                  </Suspense>
                }
              />
            </Routes>
          </section>
        </main>
        <Footer />
        <FloatingWhatsApp
          phoneNumber="+44 07440189478"
          accountName="Nancy "
          allowEsc
          allowClickAway
          notification
          notificationSound
        />
        {/* Add the StickyCTAProvider here */}
        <StickyCTAProvider />
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
