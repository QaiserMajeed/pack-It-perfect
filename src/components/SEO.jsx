import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/images/logo.svg",
  ogType = "website",
  schema = null,
}) => {
  const siteUrl = "https://packageitperfect.com/"; // Replace with your actual domain
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>
        {title
          ? `${title} | Pack it Perfect`
          : "Pack it Perfect - Custom Packaging Solutions"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Premium custom packaging solutions for businesses. Eco-friendly, affordable custom boxes with free design assistance and fast delivery across UK."
        }
      />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta
        property="og:title"
        content={
          title
            ? `${title} | Pack it Perfect`
            : "Pack it Perfect - Custom Packaging Solutions"
        }
      />
      <meta
        property="og:description"
        content={
          description ||
          "Premium custom packaging solutions for businesses. Eco-friendly, affordable custom boxes with free design assistance and fast delivery across UK."
        }
      />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta
        name="twitter:title"
        content={
          title
            ? `${title} | Pack it Perfect`
            : "Pack it Perfect - Custom Packaging Solutions"
        }
      />
      <meta
        name="twitter:description"
        content={
          description ||
          "Premium custom packaging solutions for businesses. Eco-friendly, affordable custom boxes with free design assistance and fast delivery across UK."
        }
      />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Mobile Responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
