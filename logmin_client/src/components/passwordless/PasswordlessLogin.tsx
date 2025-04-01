import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { IoIosArrowBack } from "react-icons/io";

const PasswordlessLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleBiometricLogin = () => {
    // TODO: WebAuthn 등 생체 인증 연동
    console.log("지문 또는 얼굴 인식으로 로그인 시도");
    alert("지문 또는 얼굴 인식으로 로그인합니다 (모의)");
  };

  const backIcon = <IoIosArrowBack />;

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
