import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { IoIosArrowBack } from "react-icons/io";

const SocialLogin: React.FC = () => {
  const navigate = useNavigate();
  const backIcon = <IoIosArrowBack />;

  const sessionBase = "https://backend.com/session/auth";
  const jwtBase = "https://backend.com/jwt/auth";

  const handleLogin = (provider: string, method: "session" | "jwt") => {
    const base = method === "session" ? sessionBase : jwtBase;
    window.location.href = `${base}/${provider}`;
  };

  const providerLabel: Record<string, string> = {
    google: "구글",
    kakao: "카카오",
    github: "깃허브",
    naver: "네이버",
  };

  const SocialButtonContent = ({
    iconSrc,
    alt,
    label,
    dividerColor = "rgba(0,0,0,0.2)",
    iconBoxWidth = 40,
  }: {
    iconSrc: string;
    alt: string;
    label: string;
    dividerColor?: string;
    iconBoxWidth?: number;
  }) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        whiteSpace: "nowrap",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: `${iconBoxWidth}px`,
          justifyContent: "flex-start",
        }}
      >
        <img src={iconSrc} alt={alt} width={20} height={20} />
        <span style={{ height: 20, width: 1, backgroundColor: dividerColor }} />
      </div>
      <div style={{ flex: 1 }}>
        <span>{label}</span>
      </div>
    </div>
  );

  return (
    <div className="session-login social-login">
      <div className="login-header">
        <Button variant="back" onClick={() => navigate("/")} icon={backIcon} />
        <h2>Social</h2>
      </div>

      <div className="social-login-columns">
        {/* 세션 방식 소셜 로그인 */}
        <div className="social-login-column">
          <h3>Session</h3>
          {["google", "kakao", "github", "naver"].map((provider) => (
            <Button
              key={provider}
              variant={provider as "google" | "kakao" | "github" | "naver"}
              onClick={() => handleLogin(provider, "session")}
            >
              <SocialButtonContent
                iconSrc={`/icons/${provider}.svg`}
                alt={provider}
                label={`${providerLabel[provider]}로 로그인`}
                dividerColor={
                  provider === "github"
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(0,0,0,0.2)"
                }
              />
            </Button>
          ))}
        </div>

        {/* JWT 방식 소셜 로그인 */}
        <div className="social-login-column">
          <h3>JWT</h3>
          {["google", "kakao", "github", "naver"].map((provider) => (
            <Button
              key={provider}
              variant={provider as "google" | "kakao" | "github" | "naver"}
              onClick={() => handleLogin(provider, "jwt")}
            >
              <SocialButtonContent
                iconSrc={`/icons/${provider}.svg`}
                alt={provider}
                label={`${providerLabel[provider]}로 로그인`}
                dividerColor={
                  provider === "github"
                    ? "rgba(255,255,255,0.6)"
                    : "rgba(0,0,0,0.2)"
                }
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
