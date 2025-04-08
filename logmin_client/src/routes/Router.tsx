import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "../components/common/Layout";
import ErrorPage from "../pages/ErrorPage";

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
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <LoginOptions /> },
      {
        path: "/session",
        children: [
          { index: true, element: <SessionLogin /> },
          { path: "reset-password", element: <SessionPasswordReset /> },
          { path: "signup", element: <SessionSignup /> },
        ],
      },
      {
        path: "/jwt",
        children: [
          { index: true, element: <JWTLogin /> },
          { path: "reset-password", element: <JWTPasswordReset /> },
          { path: "signup", element: <JWTSignup /> },
        ],
      },
      { path: "/social", element: <SocialLogin /> },
      { path: "/passwordless", element: <PasswordlessLogin /> },
    ],
  },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
