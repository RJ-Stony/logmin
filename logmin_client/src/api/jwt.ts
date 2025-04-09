import jwtApi from "./axios/jwt";

export const jwtLogin = (email: string, password: string) =>
  jwtApi.post("/login", { email, password });

export const jwtSignup = (email: string, password: string) =>
  jwtApi.post("/signup", { email, password });

export const jwtResetPassword = (email: string) =>
  jwtApi.post("/reset-password", { email });
