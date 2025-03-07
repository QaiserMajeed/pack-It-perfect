/**
 * Sitemap Generator Script for Pack it Perfect
 *
 * This script generates a sitemap.xml file for the Pack it Perfect website
 * based on the Products data structure.
 *
 * Usage:
 * 1. Save this file as scripts/generate-sitemap.js
 * 2. Run with: node scripts/generate-sitemap.js
 * 3. The sitemap.xml file will be created in the public directory
 */

const fs = require("fs");
const path = require("path");

// Import Products data
// Note: We're importing the CommonJS way as this runs in Node.js
const productsPath = path.resolve(__dirname, "../src/components/Products.js");
let Products;

try {
  // Handle ES modules in CommonJS environment
  const productsFile = fs.readFileSync(productsPath, "utf8");

  // Extract the Products array from the file content
  // This is a simple approach - a more robust solution would use babel/transpiling
  const productsMatch = productsFile.match(
    /const\s+Products\s*=\s*(\[[\s\S]*?\]);/
  );

  if (productsMatch && productsMatch[1]) {
    // Convert the string representation to an actual JavaScript object
    // Note: This is not safe for production without proper validation
    // In production, use a proper module bundler or build step
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
const baseUrl = 'https://packageitperfect.com';

// Get the current date for lastmod
const currentDate = new Date().toISOString();

// Main static routes
const routes = ["/", "/get-a-quote"];

console.log(`Found ${Products.length} product categories`);

// Add category routes
Products.forEach((category) => {
  if (category.category) {
    routes.push(`/category/${category.category}`);

    // Add product routes
    if (category.subProducts && category.subProducts.length > 0) {
      console.log(
        `Found ${category.subProducts.length} products in ${category.category}`
      );

      category.subProducts.forEach((product) => {
        if (product.title) {
          routes.push(
            `/category/${category.category}/product/${encodeURIComponent(
              product.title
            )}`
          );

          // Also add direct product routes that skip category
          routes.push(`/product/${encodeURIComponent(product.title)}`);
        }
      });
    }
  }
});

// Remove any duplicate routes
const uniqueRoutes = [...new Set(routes)];

console.log(`Generated ${uniqueRoutes.length} total unique routes`);

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route === "/" ? "daily" : "monthly"}</changefreq>
    <priority>${
      route === "/" ? "1.0" : route.includes("/product/") ? "0.8" : "0.6"
    }</priority>
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

// Also create a robots.txt file if it doesn't exist
const robotsPath = path.resolve(publicDir, "robots.txt");
if (!fs.existsSync(robotsPath)) {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  fs.writeFileSync(robotsPath, robotsTxt);
  console.log(`Robots.txt file created at: ${robotsPath}`);
}
