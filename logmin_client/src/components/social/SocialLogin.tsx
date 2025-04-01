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

  return (
    <div className="session-login">
      <div className="login-header">
        <Button variant="back" onClick={() => navigate("/")} icon={backIcon} />
        <h2>Social</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button onClick={handleGoogleLogin}>Google 계정으로 로그인</Button>
        <Button onClick={handleKakaoLogin}>Kakao 계정으로 로그인</Button>
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
