import sessionApi from "./axios/session"; // 소셜은 보통 세션 기반

export const socialLoginCallback = (provider: string, code: string) =>
  sessionApi.post(`/social/${provider}/callback`, { code });
