import { ProductType } from "@/mockData/products";

export interface CartItem extends ProductType {
  quantity: number;
}

export type WishlistItem = ProductType;

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: ProductType, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (product: ProductType) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
}
