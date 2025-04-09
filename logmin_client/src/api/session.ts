import sessionApi from "./axios/session";

export const sessionLogin = (email: string, password: string) =>
  sessionApi.post("/login", { email, password });

export const sessionSignup = (email: string, password: string) =>
  sessionApi.post("/signup", { email, password });

export const sessionResetPassword = (email: string) =>
  sessionApi.post("/reset-password", { email });
