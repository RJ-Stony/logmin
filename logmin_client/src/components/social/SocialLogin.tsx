import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const SocialLogin: React.FC = () => {
  const navigate = useNavigate();

  const backIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
        fill="currentColor"
      />
    </svg>
  );

  const handleGoogleLogin = () => {
    window.location.href = "https://your-backend.com/auth/google";
  };

  const handleKakaoLogin = () => {
    window.location.href = "https://your-backend.com/auth/kakao";
  };

  const handleGithubLogin = () => {
    window.location.href = "https://your-backend.com/auth/github";
  };

  const handleNaverLogin = () => {
    window.location.href = "https://your-backend.com/auth/naver";
  };

  const SocialButtonContent = ({
    iconSrc,
    alt,
    label,
    dividerColor = "rgba(0, 0, 0, 0.2)",
  }: {
    iconSrc: string;
    alt: string;
    label: string;
    dividerColor?: string;
  }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <img
        src={iconSrc}
        alt={alt}
        width={20}
        height={20}
        style={{ display: "block" }}
      />
      <span
        style={{
          height: 20,
          width: 1,
          backgroundColor: dividerColor,
        }}
      />
      <span>{label}</span>
    </div>
  );

  return (
    <div className="session-login">
      <div className="login-header">
        <Button variant="back" onClick={() => navigate("/")} icon={backIcon} />
        <h2>Social</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button variant="google" onClick={handleGoogleLogin}>
          <SocialButtonContent
            iconSrc="/icons/google.svg"
            alt="Google"
            label="Google 계정으로 로그인"
            dividerColor="#ccc"
          />
        </Button>
        <Button variant="kakao" onClick={handleKakaoLogin}>
          <SocialButtonContent
            iconSrc="/icons/kakao.svg"
            alt="Kakao"
            label="Kakao 계정으로 로그인"
            dividerColor="rgba(0,0,0,0.3)"
          />
        </Button>
        <Button variant="github" onClick={handleGithubLogin}>
          <SocialButtonContent
            iconSrc="/icons/github.svg"
            alt="Github"
            label="Github 계정으로 로그인"
            dividerColor="rgba(255,255,255,0.4)"
          />
        </Button>
        <Button variant="naver" onClick={handleNaverLogin}>
          <SocialButtonContent
            iconSrc="/icons/naver.svg"
            alt="Naver"
            label="Naver 계정으로 로그인"
            dividerColor="rgba(255,255,255,0.4)"
          />
        </Button>
      </div>
      <div className="auth-links">
        <a href="#" className="auth-link">
          비밀번호로 로그인
        </a>
        <a href="#" className="auth-link">
          이메일로 로그인
        </a>
      </div>
    </div>
  );
};

export default SocialLogin;
