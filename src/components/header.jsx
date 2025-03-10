import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Products from "./Products";
import TelephoneContact from "./Telephone";

// Styled Components
const StyledHeader = styled.header`
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const AnnouncementBar = styled.div`
  background-color: #000;
  color: #fff;
  padding: 12px 0;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const MainHeader = styled.div`
  padding: 16px 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  padding: 0;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  span,
  span:before,
  span:after {
    width: 24px;
    height: 2px;
    background-color: #000;
    position: absolute;
    transition: all 0.3s ease;
  }

  span:before,
  span:after {
    content: "";
    display: block;
  }

  span:before {
    top: -6px;
  }

  span:after {
    bottom: -6px;
  }
`;

const HeaderLogo = styled(Link)`
  img {
    padding-top: 1rem;
    height: 45px;
    width: 300px;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 16px;
  color: #000;
  font-size: 18px;
  cursor: pointer;
`;

const CartIcon = styled(Link)`
  margin-left: 16px;
  color: #000;
  font-size: 18px;
  text-decoration: none;
`;

const SearchBar = styled.div`
  position: absolute;
  top: ${(props) => (props.active ? "106px" : "-100px")};
  left: 0;
  right: 0;
  background: #fff;
  padding: 16px 0;
  transition: top 0.3s ease;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    align-items: center;
  }

  input[type="text"] {
    flex: 1;
    border: none;
    padding: 12px 16px;
    background: #f7f7f7;
    border-radius: 24px;
    font-size: 14px;
    outline: none;
  }

  button {
    background: none;
    border: none;
    padding: 0 16px;
    font-size: 16px;
    color: #666;
    cursor: pointer;
  }
`;

const DesktopNav = styled.nav`
  background-color: white;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  display: none;

  @media (min-width: 992px) {
    display: block;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav-item {
    flex: 1;
    text-align: center;
    padding-left: 1.4rem;
    font-size: larger;
  }

  .nav-link {
    display: block;
    padding: 15px;
    color: #333;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #000;
    }
  }

  .dropdown {
    position: static;
  }

  .dropdown-toggle::after {
    content: "" !important;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-left: 5px;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    left: 0;
    width: 100%;
    background-color: white;
    padding: 20px 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .category-item {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f8f8f8;
      color: #000;
    }
  }

  .category-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #f5f5f5;
    border-radius: 50%;
    margin-right: 12px;

    i {
      color: #000;
      font-size: 18px;
    }
  }

  .help-section {
    padding: 0 15px;

    h4 {
      color: #000;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      margin-bottom: 15px;
    }

    .cta-button {
      display: inline-block;
      background-color: #000;
      color: white;
      padding: 10px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.2s ease;

      &:hover {
        background-color: rgba(0, 0, 102, 0.9);
        color: white;
      }
    }
  }
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.active ? "0" : "-100%")};
  width: 100%;
  height: 100%;
  z-index: 1100;
  transition: left 0.3s ease;
`;

const MobileBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 85%;
  max-width: 380px;
  height: 100%;
  background: #fff;
  padding: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const MobileCloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #000;
  cursor: pointer;
`;

const MobileMenuContent = styled.div`
  flex-grow: 1;
  padding: 20px 0;
`;

const MobileNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MobileNavItem = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

const MobileNavLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease;
  cursor: ${(props) => (props.onClick ? "pointer" : "default")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

const MobileSubmenu = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  background: #f9f9f9;
`;

const MobileSubmenuContent = styled.div`
  padding: 8px 0;
`;

const MobileSubmenuLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 12px 20px 12px 40px;
  color: #444;
  font-size: 14px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  i {
    margin-right: 12px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const MobileMenuFooter = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
`;

const PrimaryButton = styled(Link)`
  display: block;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  padding: 14px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const MobileContact = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
`;

const MobilePhone = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-decoration: none;
`;

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
    <StyledHeader>
      {/* Announcement bar */}
      <AnnouncementBar>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="mb-0">Free shipping on all UK orders £300+</p>
            </div>
          </div>
        </div>
      </AnnouncementBar>

      {/* Main header */}
      <MainHeader>
        <div className="container">
          <div className="row align-items-center">
            {/* Menu toggle button */}
            <div className="col-3 d-flex align-items-center">
              <MenuToggle
                className={mobileMenuOpen ? "active" : ""}
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                <span className="menu-icon"></span>
              </MenuToggle>
            </div>

            {/* Logo (in center) */}
            <div className="col-6 justify-content-center d-flex text-center">
              <HeaderLogo to="/">
                <img src="/images/logo.svg" alt="Pack it Perfect" />
              </HeaderLogo>
            </div>

            {/* Right icons */}
            <div className="col-3 d-flex justify-content-end">
              <TelephoneContact />
            </div>
          </div>
        </div>
      </MainHeader>

      {/* Desktop Navigation */}
      <DesktopNav>
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
                                {category.category !== "packaging-by-style" && (
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
                  <Link to={`/blog`} className="nav-link">
                    Blog
                  </Link>
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
      </DesktopNav>

      {/* Mobile Navigation */}
      <MobileMenuWrapper active={mobileMenuOpen}>
        {/* Backdrop */}
        <MobileBackdrop onClick={toggleMobileMenu}></MobileBackdrop>

        {/* Mobile menu */}
        <MobileMenu>
          <MobileMenuHeader>
            <MobileCloseButton
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </MobileCloseButton>
          </MobileMenuHeader>

          <MobileMenuContent>
            <MobileNav>
              <MobileNavItem>
                <Link
                  to="/"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                  onClick={toggleMobileMenu}
                >
                  <MobileNavLink as="div">
                    <span>Home</span>
                  </MobileNavLink>
                </Link>
              </MobileNavItem>

              {/* Industry dropdown */}
              <MobileNavItem>
                <MobileNavLink onClick={() => toggleCategory("industry")}>
                  <span>By Industry</span>
                  <i
                    className={`fas ${
                      expandedCategory === "industry"
                        ? "fa-chevron-up"
                        : "fa-chevron-down"
                    }`}
                  ></i>
                </MobileNavLink>

                <MobileSubmenu active={expandedCategory === "industry"}>
                  <MobileSubmenuContent>
                    {Products.map(
                      (category, index) =>
                        category.category !== "packaging-by-style" && (
                          <MobileSubmenuLink
                            key={index}
                            to={`/category/${category.category}`}
                            onClick={toggleMobileMenu}
                          >
                            <i className={category.icon || "fas fa-box"}></i>
                            <span>{category.name}</span>
                          </MobileSubmenuLink>
                        )
                    )}
                  </MobileSubmenuContent>
                </MobileSubmenu>
              </MobileNavItem>

              {/* By Material */}
              <MobileNavItem>
                <Link
                  to="/category/packaging-by-style"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                  onClick={toggleMobileMenu}
                >
                  <MobileNavLink as="div">
                    <span>By Material</span>
                  </MobileNavLink>
                </Link>
              </MobileNavItem>

              {/* By Style */}
              <MobileNavItem>
                <Link
                  to="/category/packaging-by-style"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                  onClick={toggleMobileMenu}
                >
                  <MobileNavLink as="div">
                    <span>By Style</span>
                  </MobileNavLink>
                </Link>
              </MobileNavItem>

              {/* Blog */}
              <MobileNavItem>
                <a
                  href="#"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                  onClick={toggleMobileMenu}
                >
                  <MobileNavLink as="div">
                    <span>Blog</span>
                  </MobileNavLink>
                </a>
              </MobileNavItem>

              {/* Quote */}
              <MobileNavItem>
                <Link
                  to="/get-a-quote"
                  style={{
                    display: "block",
                    textDecoration: "none",
                  }}
                  onClick={toggleMobileMenu}
                >
                  <MobileNavLink as="div">
                    <span>Quote</span>
                  </MobileNavLink>
                </Link>
              </MobileNavItem>
            </MobileNav>
          </MobileMenuContent>

          <MobileMenuFooter>
            <PrimaryButton to="/get-a-quote" onClick={toggleMobileMenu}>
              Get a Quote
            </PrimaryButton>
            <MobileContact>
              <p className="mb-1">
                <strong>Call us:</strong>
              </p>
              <MobilePhone href="tel:+44 0744018948">
                +44 0744018948
              </MobilePhone>
            </MobileContact>
          </MobileMenuFooter>
        </MobileMenu>
      </MobileMenuWrapper>
    </StyledHeader>
  );
};

export default Header;
