import React from "react";
import Button from "../common/Button";

const BiometricLogin: React.FC = () => {
  const handleBiometricLogin = () => {
    // TODO: WebAuthn 등 생체 인증 연동
    console.log("생체 정보로 로그인을 시도할게요");
    alert("생체 정보 (Test)");
  };

  return (
    <div className="form-container fade-in">
      <Button onClick={handleBiometricLogin}>생체 정보로 로그인하기</Button>
    </div>
  );
};

export default BiometricLogin;
