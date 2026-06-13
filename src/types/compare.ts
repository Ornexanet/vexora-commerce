import { ProductType } from "@/mockData/products";

export type CompareItem = ProductType;

export interface CompareContextType {
  compareItems: CompareItem[];
  addToCompare: (product: ProductType) => void;
  removeFromCompare: (productId: number) => void;
  isInCompare: (productId: number) => boolean;
  clearCompare: () => void;
}
