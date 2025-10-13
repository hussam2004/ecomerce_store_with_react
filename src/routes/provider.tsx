import { createBrowserRouter, RouterProvider } from "react-router";
// import { DefaultLayout } from "../shared/layout/default-layout";
import { DefaultLayout } from "../shared/layout/components/default-layout";
// import { homeRoutes } from "../features/home/routes";
// import { productsRoutes } from "../features/products/routes";
// import { authRoutes } from "../features/auth/routes";
import { authRoutes } from "../features/auth/routes";
import { lazy } from "react";
import { AuthLayout } from "../shared/layout/auth-layout";
import { aboutroutes } from "../features/about/routes";
import { homeroutes } from "../features/home/routes";
import { productRoutes } from "../features/products/routes";
import { wishlistRoutes } from "../features/wishlist/routes";
import { contactRouts } from "../features/contact/routes";
import { cartRoutes } from "../features/cart/routes";
import { checkoutRoutes } from "../features/check-out/routes";

const NotFoundPage = lazy(() => import("../shared/pages/not-found-page"));

/**
 * Ex: my-app.com
 * list of producst: my-app.com/products
 * list of sub producst: my-app.com/user-products
 * list of sub producst: my-app.com/products/users
 * one of producst (Details): my-app.com/products/:id
 *
 * Wrong:
 * * list of sub producst: my-app.com/getProducts
 * * list of sub producst: my-app.com/user_Products
 * * one of producst (Details): my-app.com/products?id=1
 */

const routes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      ...aboutroutes,
      ...homeroutes,
      ...productRoutes,
      ...wishlistRoutes,
      ...contactRouts,
      ...cartRoutes,
      ...checkoutRoutes,
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
