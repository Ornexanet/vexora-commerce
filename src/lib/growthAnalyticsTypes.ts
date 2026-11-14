
export type GrowthOverview = {
  totalEvents: number;
  trackedSessions: number;
  productViews: number;
  addToCartEvents: number;
  wishlistEvents: number;
  checkoutStarted: number;
};

export type ConversionFunnel = {
  viewedSessions: number;
  cartSessions: number;
  checkoutSessions: number;
};

export type ProductAnalytics = {
  productId: number;
  productViews: number;
  cartAdds: number;
  wishlistAdds: number;
  viewSessions: number;
  cartSessions: number;
  wishlistSessions: number;
};
