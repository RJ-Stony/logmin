import sessionApi from "./axios/session";

export const requestMagicLink = (email: string) =>
  sessionApi.post("/passwordless/magiclink", { email });

export const verifyMagicLink = (token: string) =>
  sessionApi.post("/passwordless/verify", { token });

export const requestOTP = (email: string) =>
  sessionApi.post("/passwordless/otp-request", { email });

export const verifyOTP = (email: string, otp: string) =>
  sessionApi.post("/passwordless/otp-verify", { email, otp });
