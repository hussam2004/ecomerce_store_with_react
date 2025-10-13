import ProductDetailsPage from "../pages/product-details-page";

export const productRoutes = [
  {
    path: "/products/:id",
    element: <ProductDetailsPage />,
  },
];
