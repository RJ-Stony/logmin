import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const PasswordlessLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleBiometricLogin = () => {
    // TODO: WebAuthn 등 생체 인증 연동
    console.log("지문 또는 얼굴 인식으로 로그인 시도");
    alert("지문 또는 얼굴 인식으로 로그인합니다 (모의)");
  };

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

  return (
    <div className="session-login">
      <div className="login-header">
        <Button variant="back" onClick={() => navigate("/")} icon={backIcon} />
        <h2>Passwordless</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button onClick={handleBiometricLogin}>
          지문 또는 얼굴 인식으로 로그인
        </Button>
      </div>

      <div className="auth-links">
        <a href="#" className="auth-link">
          다른 방식으로 로그인
        </a>
      </div>
    </div>
  );
};

export default PasswordlessLogin;
