import React from "react";
import { useNavigate } from "react-router-dom";

const LoginOptions: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  // 각 버튼에 bold 스타일 적용
  const buttonStyle = { fontWeight: "bold" };

  return (
    <div className="login-options">
      <h2 style={{ textAlign: "center" }}>로그인 옵션 선택</h2>
      <div className="button-group">
        <button style={buttonStyle} onClick={() => handleNavigate("/session")}>
          세션
        </button>
        <button style={buttonStyle} onClick={() => handleNavigate("/cookie")}>
          쿠키
        </button>
        <button style={buttonStyle} onClick={() => handleNavigate("/jwt")}>
          JWT
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;
