import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/common/Layout";
import LoginOptions from "../pages/LoginOptions";
import SessionLogin from "../components/session/SessionLogin";
import SessionPasswordReset from "../components/session/SessionPasswordReset";
import SessionSignup from "../components/session/SessionSignup";
import JWTLogin from "../components/jwt/JWTLogin";
import JWTPasswordReset from "../components/jwt/JWTPasswordReset";
import JWTSignup from "../components/jwt/JWTSignup";
import SocialLogin from "../components/social/SocialLogin";
import PasswordlessLogin from "../components/passwordless/PasswordlessLogin";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</div>,
    children: [
      { path: "/", element: <LoginOptions /> },
      { path: "/session", element: <SessionLogin /> },
      { path: "/session/reset-password", element: <SessionPasswordReset /> },
      { path: "/session/signup", element: <SessionSignup /> },
      { path: "/jwt", element: <JWTLogin /> },
      { path: "/jwt/reset-password", element: <JWTPasswordReset /> },
      { path: "/jwt/signup", element: <JWTSignup /> },
      { path: "/social", element: <SocialLogin /> },
      { path: "/passwordless", element: <PasswordlessLogin /> },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
