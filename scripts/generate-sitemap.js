/**
 * Enhanced Sitemap Generator Script for Pack it Perfect
 *
 * This script generates a comprehensive sitemap.xml file for the website,
 * including all product categories, products, blog posts, and static pages.
 * It also creates a robots.txt file with sitemap reference.
 *
 * Usage:
 * 1. Save this file as scripts/generate-enhanced-sitemap.js
 * 2. Run with: node scripts/generate-enhanced-sitemap.js
 */

const fs = require("fs");
const path = require("path");

// Import Products data
const productsPath = path.resolve(__dirname, "../src/components/Products.js");
let Products = [];

try {
  // Handle ES modules in CommonJS environment
  const productsFile = fs.readFileSync(productsPath, "utf8");

  // Extract the Products array from the file content
  const productsMatch = productsFile.match(
    /const\s+Products\s*=\s*(\[[\s\S]*?\]);/
  );

  if (productsMatch && productsMatch[1]) {
    // Convert the string representation to an actual JavaScript object
    Products = eval(productsMatch[1]);
  } else {
    throw new Error("Could not find Products array in file");
  }
} catch (error) {
  console.error("Error loading Products data:", error);
  console.log("Using empty Products array as fallback");
  Products = [];
}

// Set the base URL for your website
const baseUrl = "https://packageitperfect.com";

// Get the current date for lastmod
const currentDate = new Date().toISOString();

// Define the priority and change frequency for different page types
const priorityMap = {
  home: 1.0,
  category: 0.8,
  product: 0.7,
  blog: 0.6,
  blogPost: 0.6,
  static: 0.5,
};

const changeFreqMap = {
  home: "daily",
  category: "weekly",
  product: "weekly",
  blog: "weekly",
  blogPost: "monthly",
  static: "monthly",
};

// Main static routes
const staticRoutes = [
  { url: "/", type: "home" },
  { url: "/get-a-quote", type: "static" },
  { url: "/blog", type: "blog" },
  { url: "/about-us", type: "static" },
  { url: "/contact", type: "static" },
  { url: "/faq", type: "static" },
  { url: "/privacy-policy", type: "static" },
  { url: "/terms-of-service", type: "static" },
];

// Blog post data - In a real setup, you would pull this from your CMS or database
const blogPosts = [
  {
    slug: "sustainable-packaging-trends-2025",
    type: "blogPost",
    lastmod: "2025-03-07",
  },
  {
    slug: "custom-packaging-brand-identity",
    type: "blogPost",
    lastmod: "2025-02-28",
  },
  {
    slug: "e-commerce-packaging-solutions",
    type: "blogPost",
    lastmod: "2025-02-15",
  },
  {
    slug: "luxury-packaging-design-guide",
    type: "blogPost",
    lastmod: "2025-02-08",
  },
  {
    slug: "food-packaging-safety-regulations",
    type: "blogPost",
    lastmod: "2025-01-25",
  },
  {
    slug: "packaging-cost-reduction-strategies",
    type: "blogPost",
    lastmod: "2025-01-12",
  },
];

// Build the complete routes list
let routes = [...staticRoutes];

// Add product category routes
console.log(`Found ${Products.length} product categories`);
Products.forEach((category) => {
  if (category.category) {
    routes.push({
      url: `/category/${category.category}`,
      type: "category",
      lastmod: currentDate,
    });

    // Add product routes
    if (category.subProducts && category.subProducts.length > 0) {
      console.log(
        `Found ${category.subProducts.length} products in ${category.category}`
      );

      category.subProducts.forEach((product) => {
        if (product.title) {
          // Category-specific product URL
          routes.push({
            url: `/category/${category.category}/product/${encodeURIComponent(
              product.title
            )}`,
            type: "product",
            lastmod: currentDate,
          });

          // Direct product URL (skips category)
          routes.push({
            url: `/product/${encodeURIComponent(product.title)}`,
            type: "product",
            lastmod: currentDate,
          });
        }
      });
    }
  }
});

// Add blog post routes
blogPosts.forEach((post) => {
  routes.push({
    url: `/blog/${post.slug}`,
    type: post.type,
    lastmod: post.lastmod,
  });
});

// Remove any duplicate routes
const uniqueRoutes = [];
const seenUrls = new Set();

routes.forEach((route) => {
  if (!seenUrls.has(route.url)) {
    seenUrls.add(route.url);
    uniqueRoutes.push(route);
  }
});

console.log(`Generated ${uniqueRoutes.length} total unique routes`);

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${changeFreqMap[route.type]}</changefreq>
    <priority>${priorityMap[route.type]}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

// Ensure the public directory exists
const publicDir = path.resolve(__dirname, "../public");
if (!fs.existsSync(publicDir)) {
  console.log("Creating public directory...");
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap to public folder
const sitemapPath = path.resolve(publicDir, "sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap);

console.log(`Sitemap successfully generated at: ${sitemapPath}`);
console.log(`Total URLs in sitemap: ${uniqueRoutes.length}`);

// Create an improved robots.txt file
const robotsTxt = `# robots.txt for Pack it Perfect
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delays to avoid overloading the server
User-agent: *
Crawl-delay: 10

# Block specific paths that shouldn't be indexed
Disallow: /admin/
Disallow: /wp-admin/
Disallow: /tmp/
Disallow: /includes/
Disallow: /cgi-bin/
Disallow: /*.js$
Disallow: /*.css$
Disallow: /*.json$`;

const robotsPath = path.resolve(publicDir, "robots.txt");
fs.writeFileSync(robotsPath, robotsTxt);
console.log(`Enhanced robots.txt file created at: ${robotsPath}`);

// Generate a simple HTML sitemap for users
const htmlSitemap = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap | Pack it Perfect</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1, h2 {
      color: #000;
    }
    .sitemap-section {
      margin-bottom: 30px;
    }
    ul {
      padding-left: 20px;
    }
    li {
      margin-bottom: 8px;
    }
    a {
      color: #000;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <h1>Pack it Perfect Sitemap</h1>
  <p>Use this sitemap to find your way around our website.</p>
  
  <div class="sitemap-section">
    <h2>Main Pages</h2>
    <ul>
      ${staticRoutes
        .map(
          (route) =>
            `<li><a href="${route.url}">${
              route.url === "/"
                ? "Home"
                : route.url
                    .substring(1)
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())
            }</a></li>`
        )
        .join("\n      ")}
    </ul>
  </div>
  
  <div class="sitemap-section">
    <h2>Product Categories</h2>
    <ul>
      ${Products.map((category) => {
        if (!category.category) return "";
        return `<li>
        <a href="/category/${category.category}">${
          category.name ||
          category.category
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase())
        }</a>
        ${
          category.subProducts && category.subProducts.length > 0
            ? `<ul>
            ${category.subProducts
              .slice(0, 5)
              .map(
                (product) =>
                  `<li><a href="/product/${encodeURIComponent(
                    product.title
                  )}">${product.title}</a></li>`
              )
              .join("\n            ")}
            ${category.subProducts.length > 5 ? "<li>...and more</li>" : ""}
          </ul>`
            : ""
        }
      </li>`;
      }).join("\n      ")}
    </ul>
  </div>
  
  <div class="sitemap-section">
    <h2>Blog Posts</h2>
    <ul>
      ${blogPosts
        .map(
          (post) =>
            `<li><a href="/blog/${post.slug}">${post.slug
              .replace(/-/g, " ")
              .replace(/\b\w/g, (l) => l.toUpperCase())}</a></li>`
        )
        .join("\n      ")}
    </ul>
  </div>
</body>
</html>`;

const htmlSitemapPath = path.resolve(publicDir, "sitemap.html");
fs.writeFileSync(htmlSitemapPath, htmlSitemap);
console.log(`HTML Sitemap for users created at: ${htmlSitemapPath}`);
