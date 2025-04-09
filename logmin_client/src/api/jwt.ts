import jwtApi from "./axios/jwt";

export interface JWTLoginResponse {
  token: string;
}

// 로그인: 토큰 받아야 하니까 타입 지정 필요
export const jwtLogin = (email: string, password: string) =>
  jwtApi.post<JWTLoginResponse>("/login", { email, password });

// 회원가입: 성공 여부만 확인, 토큰은 안 받아도 되는 구조일 경우
export const jwtSignup = (email: string, password: string) =>
  jwtApi.post("/signup", { email, password });

// 비밀번호 재설정: 메시지 혹은 상태만 확인
export const jwtResetPassword = (email: string) =>
  jwtApi.post("/reset-password", { email });
