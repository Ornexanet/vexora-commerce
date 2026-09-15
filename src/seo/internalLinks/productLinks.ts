import { allProducts, type ProductType } from "@/mockData/products";

export function getRelatedProducts(product: ProductType) {
  const sameCategoryProducts = allProducts.filter(
    (item) =>
      item.id !== product.id &&
      item.categories[0] === product.categories[0]
  );

  if (sameCategoryProducts.length <= 4) {
    return sameCategoryProducts;
  }

  const currentIndex = sameCategoryProducts.findIndex(
    (item) => item.id > product.id
  );

  const startIndex =
    currentIndex === -1 ? 0 : currentIndex;

  return Array.from({ length: 4 }, (_, index) => {
    return sameCategoryProducts[
      (startIndex + index) % sameCategoryProducts.length
    ];
  });
}

export function getSameBrandProducts(product: ProductType) {
  return allProducts
    .filter((item) => {
      const isDifferentProduct = item.id !== product.id;
      const hasSameBrand = item.brand === product.brand;

      return isDifferentProduct && hasSameBrand;
    })
    .slice(0, 4);
}

export function getProductCategoryLink(product: ProductType) {
  const category = product.categories[0];

  const categoryLinks: Record<string, string> = {
    mobiler: "/mobiler",
    headphones: "/horlurar",
    smartWatch: "/smarta-klockor",
    accessories: "/tillbehor",
  };

  return categoryLinks[category] || "/shop";
}
