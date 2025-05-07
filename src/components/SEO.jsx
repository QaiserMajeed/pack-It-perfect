import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * Enhanced SEO Component - Combined version with existing schemas and new improvements
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.keywords - Meta keywords (comma separated)
 * @param {string} props.canonicalUrl - Canonical URL path (without domain)
 * @param {string} props.ogImage - Open Graph image path
 * @param {string} props.ogType - Open Graph type (website, article, product)
 * @param {Object} props.schema - JSON-LD Schema data
 * @param {Array} props.breadcrumbs - Breadcrumb data for schema
 * @param {boolean} props.noindex - Whether to noindex the page
 * @param {string} props.language - Page language (default: en-GB)
 * @param {Object} props.twitter - Twitter card specific data
 * @param {string} props.publishedTime - For articles, when it was published
 * @param {string} props.modifiedTime - For articles, when it was modified
 * @param {Array} props.alternateLanguages - Alternate language versions
 * @param {string} props.location - Geographic location (for local SEO)
 */
const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/images/logo.svg",
  ogType = "website",
  schema = null,
  breadcrumbs = null,
  noindex = false,
  language = "en-GB",
  twitter = null,
  publishedTime = null,
  modifiedTime = null,
  alternateLanguages = [],
  location = "United Kingdom",
}) => {
  const siteUrl = "https://packageitperfect.com";
  const fullUrl = canonicalUrl
    ? `${siteUrl}${
        canonicalUrl.startsWith("/") ? canonicalUrl : "/" + canonicalUrl
      }`
    : siteUrl;
  const fullImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage.startsWith("/") ? ogImage : "/" + ogImage}`;

  // Generate breadcrumb schema if breadcrumbs are provided
  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url.startsWith("http")
            ? crumb.url
            : `${siteUrl}${crumb.url}`,
        })),
      }
    : null;

  // Default format for page title
  const pageTitle = title
    ? `${title} | Pack it Perfect - UK Custom Packaging`
    : "Pack it Perfect - Custom Packaging Solutions UK";

  // Optimized meta description - keep under 155-160 characters
  const getMetaDescription = (path) => {
  if (path.includes('/products')) {
    return "Browse our premium custom packaging solutions. Eco-friendly materials, competitive prices, and fast UK delivery.";
  } else if (path.includes('/contact')) {
    return "Get in touch for custom packaging solutions. Free design assistance and quotes for your business needs.";
  } else if (path.includes('/blog')) {
    return "Expert insights on packaging trends, sustainability, and industry best practices. Stay updated with Pack it Perfect.";
  }
  return description && description.length <= 160
    ? description
    : description && description.length > 160
    ? description.substring(0, 157) + "..."
    : "Premium custom packaging solutions. Eco-friendly, affordable custom boxes with free design assistance and fast UK delivery.";
};

const metaDescription = getMetaDescription(canonicalUrl);

  // Enhanced keywords with more specific, targeted phrases
  const enhancedKeywords = keywords
    ? `${keywords}, UK packaging, custom boxes UK, sustainable packaging`
    : "custom packaging UK, bespoke packaging, eco-friendly packaging boxes, custom printed boxes, UK packaging solutions";

  // PRESERVE EXISTING ORGANIZATION SCHEMA
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pack it Perfect",
    url: "https://packageitperfect.com/",
    logo: "https://packageitperfect.com/images/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44 07459 682266",
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "128 City Road",
      addressLocality: "London",
      postalCode: "EC1V 2NX",
      addressCountry: "GB",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61574096784137",
      "https://www.instagram.com/pack.itperfect",
      "https://twitter.com/packageitperfect",
      "https://www.linkedin.com/company/packageitperfect",
    ],
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <html lang={language} />
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={enhancedKeywords} />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="London" />

      {/* Robots directives */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content={language} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Pack it Perfect" />

      {/* Article specific tags */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}

      {/* Twitter */}
      <meta
        name="twitter:card"
        content={twitter?.card || "summary_large_image"}
      />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={twitter?.title || pageTitle} />
      <meta
        name="twitter:description"
        content={twitter?.description || metaDescription}
      />
      <meta name="twitter:image" content={twitter?.image || fullImageUrl} />
      {twitter?.creator && (
        <meta name="twitter:creator" content={twitter.creator} />
      )}
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />}

      {/* Mobile Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Alternate language versions */}
      {alternateLanguages.map((lang) => (
        <link
          key={lang.code}
          rel="alternate"
          hrefLang={lang.code}
          href={
            lang.url.startsWith("http") ? lang.url : `${siteUrl}${lang.url}`
          }
        />
      ))}

      {/* Preconnect to critical domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}

      {/* Organization Schema - Using existing schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Breadcrumb schema if provided */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

// PRESERVE EXISTING PRODUCT CATEGORY SCHEMA GENERATOR
const generateCategorySchema = (category) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} Packaging Solutions`,
    description:
      category.description ||
      `Premium custom ${category.name.toLowerCase()} packaging solutions.`,
    numberOfItems: category.subProducts?.length || 0,
    itemListElement:
      category.subProducts?.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          description:
            product.description ||
            `Custom ${product.title.toLowerCase()} packaging solutions`,
          image: product.image,
          url: `https://packageitperfect.com/category/${category.category}/product/${product.title}`,
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "0.06",
            highPrice: "0.25",
            priceCurrency: "GBP",
            offerCount: "5",
            availability: "https://schema.org/InStock",
          },
        },
      })) || [],
  };
};

// PRESERVE EXISTING PRODUCT SCHEMA GENERATOR
const generateProductSchema = (product, category) => {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    image: product.image,
    description:
      product.description ||
      `Premium quality custom ${product.title.toLowerCase()} packaging solutions.`,
    sku: `PIP-${product.title.replace(/\s+/g, "-").toLowerCase()}`,
    brand: {
      "@type": "Brand",
      name: "Pack it Perfect",
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0.06",
      highPrice: "0.25",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      offerCount: "5",
      seller: {
        "@type": "Organization",
        name: "Pack it Perfect",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      reviewCount: "142",
    },
    category: category.name,
    material: "Premium cardboard, kraft, corrugated, or rigid board",
    isFamilyFriendly: true,
  };
};

// PRESERVE EXISTING BREADCRUMB SCHEMA GENERATOR
const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

export default SEO;
export {
  generateCategorySchema,
  generateProductSchema,
  generateBreadcrumbSchema,
};
