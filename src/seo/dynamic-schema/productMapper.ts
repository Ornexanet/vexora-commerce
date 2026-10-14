
import type { ProductType } from "@/mockData/products";
import type { ProductData } from "./product";

export function mapProductToSchema(
  product: ProductType
): ProductData {
  const availability: ProductData["availability"] =
    product.availability === "Finns i lager"
      ? "InStock"
      : product.availability === "Förbeställning"
        ? "PreOrder"
        : "OutOfStock";

  return {
    id: String(product.id),
    name: product.title,
    description: product.description,
    image: product.thumbnail,
    price: product.price,
    currency: "SEK",
    availability,
    brand: product.brand ?? "Okänt varumärke",
    sku: String(product.id),
  };
}

