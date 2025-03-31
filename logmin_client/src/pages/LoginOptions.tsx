import React from "react";
import { useNavigate } from "react-router-dom";

const LoginOptions: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="login-options">
      <h3>원하는 로그인 방식 선택하기!</h3>
      <div className="button-group">
        <button
          className="auth-option-button session"
          onClick={() => handleNavigate("/session")}
        >
          <div className="option-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="option-text">
            <span className="option-title">세션 방식</span>
            <span className="option-description">
              서버 측에서 유저 정보를 관리합니다
            </span>
          </div>
        </button>

        <button
          className="auth-option-button cookie"
          onClick={() => handleNavigate("/cookie")}
        >
          <div className="option-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 16C10.9 16 10 15.1 10 14C10 12.9 10.9 12 12 12C13.1 12 14 12.9 14 14C14 15.1 13.1 16 12 16ZM12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11ZM7 12C5.9 12 5 11.1 5 10C5 8.9 5.9 8 7 8C8.1 8 9 8.9 9 10C9 11.1 8.1 12 7 12ZM17 12C15.9 12 15 11.1 15 10C15 8.9 15.9 8 17 8C18.1 8 19 8.9 19 10C19 11.1 18.1 12 17 12Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="option-text">
            <span className="option-title">쿠키 방식</span>
            <span className="option-description">
              브라우저에 쿠키를 저장합니다
            </span>
          </div>
        </button>

        <button
          className="auth-option-button jwt"
          onClick={() => handleNavigate("/jwt")}
        >
          <div className="option-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="option-text">
            <span className="option-title">JWT 방식</span>
            <span className="option-description">
              토큰 기반의 인증 방식입니다
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;
