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
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M9 1h6v2H9zM19.03 7.39l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM13 14h-2V8h2v6z"></path>
            </svg>
          </div>
          <div className="option-text">
            <span className="option-title">Session</span>
            <span className="option-description">
              서버 측에서 유저 정보를 관리합니다
            </span>
          </div>
        </button>

        <button
          className="auth-option-button jwt"
          onClick={() => handleNavigate("/jwt")}
        >
          <div className="option-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M264.4 95.01c-35.6-.06-80.2 11.19-124.2 34.09C96.27 152 61.45 182 41.01 211.3c-20.45 29.2-25.98 56.4-15.92 75.8 10.07 19.3 35.53 30.4 71.22 30.4 35.69.1 80.29-11.2 124.19-34 44-22.9 78.8-53 99.2-82.2 20.5-29.2 25.9-56.4 15.9-75.8-10.1-19.3-35.5-30.49-71.2-30.49zm91.9 70.29c-3.5 15.3-11.1 31-21.8 46.3-22.6 32.3-59.5 63.8-105.7 87.8-46.2 24.1-93.1 36.2-132.5 36.2-18.6 0-35.84-2.8-50.37-8.7l10.59 20.4c10.08 19.4 35.47 30.5 71.18 30.5 35.7 0 80.3-11.2 124.2-34.1 44-22.8 78.8-52.9 99.2-82.2 20.4-29.2 26-56.4 15.9-75.7zm28.8 16.8c11.2 26.7 2.2 59.2-19.2 89.7-18.9 27.1-47.8 53.4-83.6 75.4 11.1 1.2 22.7 1.8 34.5 1.8 49.5 0 94.3-10.6 125.9-27.1 31.7-16.5 49.1-38.1 49.1-59.9 0-21.8-17.4-43.4-49.1-59.9-16.1-8.4-35.7-15.3-57.6-20zm106.7 124.8c-10.2 11.9-24.2 22.4-40.7 31-35 18.2-82.2 29.1-134.3 29.1-21.2 0-41.6-1.8-60.7-5.2-23.2 11.7-46.5 20.4-68.9 26.1 1.2.7 2.4 1.3 3.7 2 31.6 16.5 76.4 27.1 125.9 27.1s94.3-10.6 125.9-27.1c31.7-16.5 49.1-38.1 49.1-59.9z"></path>
            </svg>
          </div>
          <div className="option-text">
            <span className="option-title">JWT</span>
            <span className="option-description">
              토큰 기반의 인증 방식입니다
            </span>
          </div>
        </button>

        <button
          className="auth-option-button social"
          onClick={() => handleNavigate("/social")}
        >
          <div className="option-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336z"></path>
            </svg>
          </div>
          <div className="option-text">
            <span className="option-title">Social</span>
            <span className="option-description">
              Google, Kakao 등 외부 계정을 이용합니다
            </span>
          </div>
        </button>

        <button
          className="auth-option-button passwordless"
          onClick={() => handleNavigate("/passwordless")}
        >
          <div className="option-icon">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8v-2a2 2 0 0 1 2 -2h2"></path>
              <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
              <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
              <path d="M16 20h2a2 2 0 0 0 2 -2v-2"></path>
              <path d="M9 10l.01 0"></path>
              <path d="M15 10l.01 0"></path>
              <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
            </svg>
          </div>
          <div className="option-text">
            <span className="option-title">Passwordless</span>
            <span className="option-description">
              비밀번호 없이 간단히 로그인합니다
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LoginOptions;
