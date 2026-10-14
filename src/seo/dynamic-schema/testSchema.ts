import { generateOrganizationSchema } from "./organization";
import { generateWebsiteSchema } from "./website";
import { generateWebPageSchema } from "./webpage";
import { generateBreadcrumbSchema } from "./breadcrumb";
import { generateProductSchema } from "./product";


// 1. Organization
const organization = generateOrganizationSchema();

// 2. WebSite
const website = generateWebsiteSchema();

// 3. WebPage
const aboutPage = generateWebPageSchema({
  title: "Om Ornexa Shop",
  description: "Läs mer om Ornexa Shop.",
  path: "/about",
});

// 4. Breadcrumb
const aboutBreadcrumb = generateBreadcrumbSchema([
  { name: "Hem", path: "/" },
  { name: "Om Ornexa Shop", path: "/about" },
]);
const testProduct = generateProductSchema({
  id: "samsung-s26-ultra",
  name: "Samsung Galaxy S26 Ultra",
  description: "Samsung smartphone med avancerad kamera.",
  image: "/images/samsung-s26-ultra.webp",
  price: 16990,
  currency: "SEK",
  availability: "InStock",
  brand: "Samsung",
  sku: "S26-ULTRA",
});

console.log(
  "Product Schema:",
  JSON.stringify(testProduct, null, 2)
);
// 5. Entity Graph
const entityGraph = {
  "@context": "https://schema.org",

  "@graph": [
    organization,
    website,
    aboutPage,
    aboutBreadcrumb,
    testProduct,
  ].map(({ "@context": _context, ...entity }) => entity),
};

// 6. Test entity connections
const organizationConnected =
  website.publisher["@id"] === organization["@id"];

const breadcrumbConnected =
  aboutPage.breadcrumb["@id"] === aboutBreadcrumb["@id"];

console.log("Organization connected:", organizationConnected);
console.log("Breadcrumb connected:", breadcrumbConnected);

// 7. Print complete JSON-LD
console.log(
  "Entity Graph:",
  JSON.stringify(entityGraph, null, 2)
);

console.log(
  "Product connected:",
  testProduct.offers.seller["@id"] === organization["@id"]
);
