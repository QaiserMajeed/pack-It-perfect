import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";
import "./Header.css";
import TelephoneContact from "./Telephone";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchActive, setSearchActive] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setMobileMenuOpen(false);
        setExpandedCategory(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "";
  };

  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  // Toggle search bar
  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header className="onestep-header">
      {/* Announcement bar */}
      <div className="announcement-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">Free shipping on all UK orders £300+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      {/* Main header */}
      <div className="main-header">
        <div className="container">
          <div className="row align-items-center">
            {/* Left space or additional content */}
            <div className="col-4 col-md-4 d-flex align-items-center">
              {/* Mobile buttons */}
              <div className="mobile-actions d-flex d-md-none">
                <button
                  className={`menu-toggle ${mobileMenuOpen ? "active" : ""}`}
                  onClick={toggleMobileMenu}
                  aria-label="Menu"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <i className="fas fa-bars" style={{ fontSize: "20px" }}></i>
                </button>
              </div>
            </div>

            {/* Logo (in center) */}
            <div className="col-4 col-md-4 text-center">
              <Link to="/" className="header-logo">
                <img
                  src="/images/svgviewer-output (2).svg"
                  alt="Pack it Perfect"
                  className="img-fluid"
                />
              </Link>
            </div>

            {/* Contact info (moved to right) */}
            <div className="col-4 col-md-4 d-flex justify-content-end align-items-center">
              <TelephoneContact />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="main-nav d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link dropdown-toggle">
                    By Industry
                  </a>
                  <div className="dropdown-menu">
                    <div className="container">
                      <div className="row">
                        {/* Main categories area - takes 9 columns */}
                        <div className="col-md-9">
                          {/* Categories grid */}
                          <div className="row">
                            {Products.map((category, index) => (
                              <div key={index} className="col-md-4 mb-3">
                                {category.category != "packaging-by-style" && (
                                  <Link
                                    to={`/category/${category.category}`}
                                    className="category-item"
                                  >
                                    <span className="category-icon">
                                      <i
                                        className={
                                          category.icon || "fas fa-box"
                                        }
                                      ></i>
                                    </span>
                                    <span className="category-name">
                                      {category.name}
                                    </span>
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Help section - takes 3 columns */}
                        <div className="col-md-3">
                          <div className="help-section">
                            <h4>Need Help?</h4>
                            <p>
                              Contact our packaging specialists for custom
                              solutions tailored to your needs.
                            </p>
                            <a href="/get-a-quote" className="cta-button">
                              Get a Quote
                            </a>
                            <p className="mt-3 mb-0">
                              <strong>Call us:</strong>
                            </p>
                            <p className="fw-bold">+44 0744018948</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/category/packaging-by-style" className="nav-link">
                    By Material
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    to={`/category/packaging-by-style`}
                    className="nav-link"
                  >
                    By Style
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link to={`/get-a-quote`} className="nav-link">
                    Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={`mobile-menu-wrapper ${mobileMenuOpen ? "active" : ""}`}>
        {/* Backdrop */}
        <div className="mobile-backdrop" onClick={toggleMobileMenu}></div>

        {/* Mobile menu */}
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <img
                src="/images/svgviewer-output (2).svg"
                alt="Pack it Perfect"
                className="img-fluid"
              />
            </div>
            <button className="mobile-close" onClick={toggleMobileMenu}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="mobile-menu-content">
            <ul className="mobile-nav">
              <li className="mobile-nav-item">
                <Link
                  to="/"
                  className="mobile-nav-link"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>

              {/* Industry dropdown */}
              <li className="mobile-nav-item has-children">
                <div
                  className="mobile-nav-link"
                  onClick={() => toggleCategory("industry")}
                >
                  <span>By Industry</span>
                  <i
                    className={`fas ${
                      expandedCategory === "industry"
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                  ></i>
                </div>

                <div
                  className={`mobile-submenu ${
                    expandedCategory === "industry" ? "active" : ""
                  }`}
                >
                  <div className="mobile-submenu-content">
                    {Products.map((category, index) => (
                      <Link
                        key={index}
                        to={`/category/${category.category}`}
                        className="mobile-submenu-link"
                        onClick={toggleMobileMenu}
                      >
                        <i className={category.icon || "fas fa-box"}></i>
                        <span>{category.category}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              {/* Other menu items */}
              <li className="mobile-nav-item has-children">
                <div
                  className="mobile-nav-link"
                  onClick={() => toggleCategory("material")}
                >
                  <span>By Material</span>
                  <i
                    className={`fas ${
                      expandedCategory === "material"
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                  ></i>
                </div>

                <div
                  className={`mobile-submenu ${
                    expandedCategory === "material" ? "active" : ""
                  }`}
                >
                  <div className="mobile-submenu-content">
                    <a
                      href="#"
                      className="mobile-submenu-link"
                      onClick={toggleMobileMenu}
                    >
                      Cardboard
                    </a>
                    <a
                      href="#"
                      className="mobile-submenu-link"
                      onClick={toggleMobileMenu}
                    >
                      Kraft Paper
                    </a>
                    <a
                      href="#"
                      className="mobile-submenu-link"
                      onClick={toggleMobileMenu}
                    >
                      Corrugated
                    </a>
                    <a
                      href="#"
                      className="mobile-submenu-link"
                      onClick={toggleMobileMenu}
                    >
                      Rigid
                    </a>
                    <a
                      href="#"
                      className="mobile-submenu-link"
                      onClick={toggleMobileMenu}
                    >
                      Eco-Friendly
                    </a>
                  </div>
                </div>
              </li>

              <li className="mobile-nav-item">
                <a
                  href="#"
                  className="mobile-nav-link"
                  onClick={toggleMobileMenu}
                >
                  By Style
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#"
                  className="mobile-nav-link"
                  onClick={toggleMobileMenu}
                >
                  By Tags
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#"
                  className="mobile-nav-link"
                  onClick={toggleMobileMenu}
                >
                  By Sticker
                </a>
              </li>
              <li className="mobile-nav-item">
                <a
                  href="#"
                  className="mobile-nav-link"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-footer">
            <a
              href="#quote"
              className="btn btn-primary btn-block"
              onClick={toggleMobileMenu}
            >
              Get a Quote
            </a>
            <div className="mobile-contact mt-3">
              <p className="mb-1">
                <strong>Call us:</strong>
              </p>
              <a href="tel:+44 0744018948" className="mobile-phone">
                +44 0744018948
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
