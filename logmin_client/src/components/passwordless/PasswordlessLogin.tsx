import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { IoIosArrowBack } from "react-icons/io";

const PasswordlessLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleBiometricLogin = () => {
    // TODO: WebAuthn 등 생체 인증 연동
    console.log("생체 정보로 로그인을 시도할게요");
    alert("생체 정보로 로그인하겠습니다! (Test)");
  };

  const backIcon = <IoIosArrowBack />;

  return (
    <div className="session-login">
      <div className="login-header">
        <Button variant="back" onClick={() => navigate("/")} icon={backIcon} />
        <h2>Passwordless</h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Button onClick={handleBiometricLogin}>생체 정보로 로그인</Button>
      </div>
    </div>
  );
};

export default PasswordlessLogin;
