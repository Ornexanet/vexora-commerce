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
