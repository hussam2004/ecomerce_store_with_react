import { ProtectedRoute } from "../../../shared/guards/auth-guard";
import { CheckOutPage } from "../pages/check-out-page";

export const checkoutRoutes = [
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <CheckOutPage />
      </ProtectedRoute>
    ),
  },
];
