import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { IoIosArrowBack } from "react-icons/io";

const SocialLogin: React.FC = () => {
  const navigate = useNavigate();

  const backIcon = <IoIosArrowBack />;

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
    dividerColor = "rgba(0,0,0,0.2)",
    iconBoxWidth = 40,
  }: {
    iconSrc: string;
    alt: string;
    label: string;
    dividerColor?: string;
    iconBoxWidth?: number;
  }) => (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      {/* 아이콘 + 세로선 (고정 너비) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          width: `${iconBoxWidth}px`,
          justifyContent: "flex-start",
        }}
      >
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
      </div>

      {/* 텍스트 영역 (유동적) */}
      <div style={{ flex: 1 }}>
        <span>{label}</span>
      </div>
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
            label="구글로 로그인"
            dividerColor="#ccc"
          />
        </Button>
        <Button variant="kakao" onClick={handleKakaoLogin}>
          <SocialButtonContent
            iconSrc="/icons/kakao.svg"
            alt="Kakao"
            label="카카오로 로그인"
            dividerColor="rgba(0,0,0,0.3)"
          />
        </Button>
        <Button variant="github" onClick={handleGithubLogin}>
          <SocialButtonContent
            iconSrc="/icons/github.svg"
            alt="Github"
            label="깃허브로 로그인"
            dividerColor="rgba(255,255,255,0.4)"
          />
        </Button>
        <Button variant="naver" onClick={handleNaverLogin}>
          <SocialButtonContent
            iconSrc="/icons/naver.svg"
            alt="Naver"
            label="네이버로 로그인"
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
