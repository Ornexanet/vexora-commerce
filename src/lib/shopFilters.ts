import { allProducts, ProductType } from "@/mockData/products";

export const shopCategories = [
  { key: "mobiler", label: "Mobiler", href: "/mobiler" },
  { key: "headphones", label: "Hörlurar", href: "/horlurar" },
  { key: "smartWatch", label: "Smarta klockor", href: "/smarta-klockor" },
  { key: "accessories", label: "Tillbehör", href: "/tillbehor" },
];
export const unitPrice = (product: ProductType) => product.price - (product.discount ?? 0);
export function getShopResults(pathname: string, params: URLSearchParams) {
  const category = shopCategories.find((entry) => entry.href === pathname)?.key ?? params.get("category");
  const catalog = category ? allProducts.filter((product) => product.categories.includes(category)) : allProducts;
  const brands = Array.from(new Set(catalog.map((product) => product.brand?.trim()).filter((brand): brand is string => !!brand))).sort((a, b) => a.localeCompare(b, "sv"));
  const selectedBrands = params.getAll("brand");
  const ceiling = Math.ceil(Math.max(0, ...catalog.map(unitPrice)));
  const number = (key: string, fallback: number) => {
    const value = params.get(key);
    return value !== null && value.trim() !== "" && Number.isFinite(Number(value)) && Number(value) >= 0 ? Number(value) : fallback;
  };
  const min = number("min", 0), max = number("max", ceiling);
  const filtered = catalog.filter((product) => (!selectedBrands.length || selectedBrands.includes(product.brand?.trim() ?? "")) && unitPrice(product) >= min && unitPrice(product) <= max);
  return { category, brands, selectedBrands, ceiling, min, max, products: filtered };
}
