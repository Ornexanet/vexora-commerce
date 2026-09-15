
import { allProducts, type ProductType } from "@/mockData/products";

const MAX_RELATED_PRODUCTS = 4;
const MAX_BRAND_PRODUCTS = 4;

/**
 * Creates a deterministic rotation of products.
 *
 * The purpose is to avoid always linking to the first products
 * in allProducts while keeping the output stable for SEO.
 */
function rotateProducts(
  products: ProductType[],
  productId: number,
  limit: number
): ProductType[] {
  if (products.length <= limit) {
    return products;
  }

  // Stable ordering makes internal links predictable between builds.
  const sortedProducts = [...products].sort(
    (a, b) => a.id - b.id
  );

  // Use the current product ID to distribute links
  // across the available products.
  const startIndex = productId % sortedProducts.length;

  return Array.from(
    { length: Math.min(limit, sortedProducts.length) },
    (_, index) =>
      sortedProducts[
        (startIndex + index) % sortedProducts.length
      ]
  );
}

/**
 * Returns related products from the same primary category.
 *
 * SEO goals:
 * - Every product links to relevant products.
 * - Links are distributed across the category.
 * - The current product can never link to itself.
 * - Output remains deterministic.
 */
export function getRelatedProducts(
  product: ProductType
): ProductType[] {
  const primaryCategory = product.categories?.[0];

  if (!primaryCategory) {
    return [];
  }

  const sameCategoryProducts = allProducts.filter(
    (item) =>
      item.id !== product.id &&
      item.categories?.[0] === primaryCategory
  );

  return rotateProducts(
    sameCategoryProducts,
    product.id,
    MAX_RELATED_PRODUCTS
  );
}

/**
 * Returns other products from the same brand.
 *
 * This can later be used for sections such as:
 * "Fler produkter från Samsung"
 * "Fler produkter från Apple"
 * "Fler produkter från Google"
 */
export function getSameBrandProducts(
  product: ProductType
): ProductType[] {
  if (!product.brand) {
    return [];
  }

  const sameBrandProducts = allProducts.filter(
    (item) =>
      item.id !== product.id &&
      item.brand === product.brand
  );

  return rotateProducts(
    sameBrandProducts,
    product.id,
    MAX_BRAND_PRODUCTS
  );
}

/**
 * Maps product categories to their SEO landing pages.
 */
export function getProductCategoryLink(
  product: ProductType
): string {
  const primaryCategory = product.categories?.[0];

  const categoryLinks: Record<string, string> = {
    mobiler: "/mobiler",
    headphones: "/horlurar",
    smartWatch: "/smarta-klockor",
    accessories: "/tillbehor",
  };

  return categoryLinks[primaryCategory] ?? "/shop";
}
