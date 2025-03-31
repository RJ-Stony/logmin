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
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.007 1l.238 .005a6 6 0 0 1 5.405 3.974l.078 .233a6 6 0 0 1 -.182 4.08l-.093 .21l.05 -.002a2.94 2.94 0 0 1 2.638 1.511l.081 .158a2.887 2.887 0 0 1 -1.234 3.764l-.19 .096l-1.798 .821v.963l1.166 1.166l.14 .154a2.96 2.96 0 0 1 -.17 4.002c-1.087 1.088 -2.827 1.161 -4.03 .144l-.16 -.146l-1.946 -1.948l-1.946 1.947a2.96 2.96 0 0 1 -3.95 .22l-.15 -.128c-1.17 -1.073 -1.284 -2.879 -.234 -4.12l.146 -.158l1.134 -1.134v-.962l-1.834 -.84l-.181 -.093a2.88 2.88 0 0 1 -1.205 -3.75a2.93 2.93 0 0 1 2.646 -1.661l.13 .003l-.03 -.064a6.1 6.1 0 0 1 -.503 -1.968l-.017 -.26v-.217a6 6 0 0 1 5.775 -5.996l.224 -.004zm.003 15h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m0 -3h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m0 -5h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2m-2 -3h-.01a1 1 0 1 0 0 2h.01a1 1 0 0 0 0 -2m4 0h-.01a1 1 0 0 0 0 2h.01a1 1 0 0 0 0 -2"></path>
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
