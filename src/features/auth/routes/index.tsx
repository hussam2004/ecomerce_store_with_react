import LoginPage from "../pages/login-page";
import SignupPage from "../pages/signup-page";

export const authRoutes = [
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />,
  },
];
