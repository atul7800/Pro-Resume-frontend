import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import { ClerkProvider } from "@clerk/clerk-react";
import Dashboard from "./pages/dashboard/Dashboard";
import SignInPage from "./pages/auth/SignInPage";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const routes = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={routes} />
    </ClerkProvider>
  </StrictMode>,
);
