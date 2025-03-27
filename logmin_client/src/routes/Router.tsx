import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/common/Layout";
import LoginOptions from "../pages/LoginOptions";
import SessionLogin from "../components/session/SessionLogin";
import CookieLogin from "../components/cookie/CookieLogin";
import JWTLogin from "../components/jwt/JWTLogin";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>,
    children: [
      { path: "/", element: <LoginOptions /> },
      { path: "/session", element: <SessionLogin /> },
      { path: "/cookie", element: <CookieLogin /> },
      { path: "/jwt", element: <JWTLogin /> },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
