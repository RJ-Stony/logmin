import React from "react";
import { useNavigate } from "react-router-dom";

const LoginOptions: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="login-options">
      <h2>로그인 옵션 선택</h2>
      <div className="button-group">
        <button onClick={() => handleNavigate("/session")}>세션 로그인</button>
        <button onClick={() => handleNavigate("/cookie")}>쿠키 로그인</button>
        <button onClick={() => handleNavigate("/jwt")}>JWT 로그인</button>
      </div>
    </div>
  );
};

export default LoginOptions;
