
import type { ProductType } from "@/mockData/products";

// Swedish product category names
const productTypeNames: Record<string, string> = {
  phone: "mobiltelefon",
  headphones: "hörlurar",
  smartwatch: "smartklocka",
  accessory: "tillbehör",
  camera: "kamera",
};

// Normalize text and remove extra whitespace
function cleanText(value?: string): string {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

// Generate a dynamic GEO-friendly product description
export function generateGEODescription(
  product: ProductType
): string {
  const title = cleanText(product.title);
  const brand = cleanText(product.brand);

  const productType = product.productType
    ? productTypeNames[product.productType] ??
      product.productType
    : "";

  // Use the existing product description
  const description = cleanText(
    product.overview || product.description
  );

  // Avoid repeating the brand in the introduction
  const brandAlreadyInTitle =
    brand.length > 0 &&
    title.toLowerCase().includes(brand.toLowerCase());

  const productName = brand && !brandAlreadyInTitle
    ? `${brand} ${title}`
    : title;

  // Build a readable Swedish introduction
  const introduction = productType
    ? `${productName} är en produkt inom kategorin ${productType}.`
    : `${productName} är en produkt.`;

  // Extract available technical facts
  const technicalFacts = (product.specifications ?? [])
    .filter(
      (spec) =>
        cleanText(spec.label) &&
        cleanText(spec.value)
    )
    .slice(0, 3)
    .map(
      (spec) =>
        `${cleanText(spec.label)}: ${cleanText(spec.value)}`
    );

  // Avoid adding the same fact twice
  const uniqueFacts = [
    ...new Set(technicalFacts),
  ];

  const factsText = uniqueFacts.length
    ? `Tekniska egenskaper: ${uniqueFacts.join("; ")}.`
    : "";

  // Combine all sections into one description
  const geoDescription = [
  introduction,
  description,
  factsText,
]
  .filter(Boolean)
  .join(" ");

return geoDescription;

}

