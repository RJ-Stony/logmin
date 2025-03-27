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
      <h3 style={{ textAlign: "center" }}>원하는 로그인 방식 선택하기!</h3>
      <div className="button-group">
        <button style={buttonStyle} onClick={() => handleNavigate("/session")}>
          세션 방식
        </button>
        <button style={buttonStyle} onClick={() => handleNavigate("/cookie")}>
          쿠키 방식
        </button>
        <button style={buttonStyle} onClick={() => handleNavigate("/jwt")}>
          JWT 방식
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;
