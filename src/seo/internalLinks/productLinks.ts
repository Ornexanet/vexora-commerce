import { allProducts, type ProductType } from "@/mockData/products";

export function getRelatedProducts(product: ProductType) {
  return allProducts
    .filter((item) => {
      const isDifferentProduct = item.id !== product.id;
      const hasSameCategory =
        item.categories[0] === product.categories[0];

      return isDifferentProduct && hasSameCategory;
    })
    .slice(0, 4);
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
