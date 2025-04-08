import React from "react";
import Button from "../common/Button";
import { SocialButtonContent } from "./SocialButtonContent";

const JWTSocialLogin: React.FC = () => {
  const handleLogin = (provider: string) => {
    window.location.href = `https://your-backend.com/jwt/auth/${provider}`;
  };

  const providers: Record<string, string> = {
    google: "구글",
    kakao: "카카오",
    github: "깃허브",
    naver: "네이버",
  };

  return (
    <div className="social-login-column">
      {Object.entries(providers).map(([provider, label]) => (
        <Button
          key={provider}
          variant={provider as "google" | "kakao" | "github" | "naver"}
          onClick={() => handleLogin(provider)}
        >
          <SocialButtonContent
            iconSrc={`/icons/${provider}.svg`}
            alt={provider}
            label={`${label}로 로그인`}
            dividerColor={
              provider === "github"
                ? "rgba(255,255,255,0.6)"
                : "rgba(0,0,0,0.2)"
            }
          />
        </Button>
      ))}
    </div>
  );
};

export default JWTSocialLogin;
